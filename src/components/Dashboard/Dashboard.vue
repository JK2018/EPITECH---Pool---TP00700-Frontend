<template>
<div class="main">
    <div class="clock-section">
        <Clock v-on:stop-click="getMe()"></Clock>
    </div>
    <div class="chart-section">
        <div class="chtdiv">
            <h3 class="title" style="margin-bottom: 0">Ma semaine</h3>
            <chart v-bind:arrayProps="usersArray"></chart>
        </div>
    </div>
    <div class="bottom-section">
        <div class="dashboard-section">
            <h3 class="title">Dashboard</h3>
            <ul class="dashboard-ul">
                <li>
                    Time worked this Week :
                    <span> {{ timeWorkedThisWeek }} hours </span>
                </li>
                <li>
                    Time worked Today : <span> {{ timeWorkedToday }} hours</span>
                </li>
                <li>
                    Time to recuperate this week :
                    <span> {{ timeToRecuperateThisWeek }} hours</span>
                </li>
                <li>
                    Remaining work time this week :
                    <span> {{ remainingWorkTimeThisWeek }} hours</span>
                </li>
                <li>
                    Clocked in today at : <span> {{ firstClockIn }}</span>
                </li>
                <li>
                    Clocked out today at : <span> {{ lastClockOut }} </span>
                </li>
            </ul>
        </div>
        <div class="team-section">
            <h3 class="title">Team</h3>
        </div>
    </div>
</div>
</template>

<script>
import Clock from "../../custom-elements/Clock.vue";
import Chart from "../../custom-elements/Chart/Chart";
import axios from "axios";
// import moment from "moment";

export default {
    name: "Dashboard",
    data() {
        return {
            timeWorkedToday: 0,
            timeWorkedThisWeek: 0,
            firstClockIn: "Havn't clocked in yet",
            lastClockOut: "Havn't clocked out yet",
            timeToRecuperateThisWeek: 0,
            remainingWorkTimeThisWeek: 35,
            weekDatasetX: [],
            weekDatasetY: [],
            apiData: [],

            usersArray: [],
        };
    },
    components: {
        Clock,
        Chart,
    },
    mounted() {
        this.getMe();
    },
    methods: {
        getMe() {
            // console.log("emit ?");
            axios
                .get(`http://localhost:4000/api/users/${localStorage.getItem("id")}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                })
                .then((res) => {
                    this.usersArray = new Array();
                    this.usersArray.push(res.data.user);
                    console.log(res.data);
                })
                .catch((error) => {
                    console.error("Error = " + error);
                    //if token expire
                    window.location.href = "/login";
                });
        },
    },
};
</script>

<style lang="scss" scoped>
@import "./Dashboard.scss";
</style>
