<template>
<div class="main">

    <div class="top">
        <div class="infodiv">

            <div class="title">
                <h1> Dashboard </h1>
            </div>

            <div class="elems">
                <div class="elm1">
                    <p class="e1">Time worked this Week : <span> {{timeWorkedThisWeek}} hours </span></p>
                    <p class="e1">Time worked Today : <span> {{timeWorkedToday}} hours</span></p>
                    <p class="e1">Time to recuperate this week : <span> {{timeToRecuperateThisWeek}} hours</span></p>
                    <p class="e1">Remaining work time this week : <span> {{remainingWorkTimeThisWeek}} hours</span></p>
                </div>

                <div class="elm">
                    <p class="e2">Clocked in today at : <span> {{ firstClockIn }}</span></p>
                    <p class="e2">Clocked out today at : <span> {{ lastClockOut }} </span></p>
                    <p class="e2">Team N° : <span> to be defined </span></p>
                    <p class="e2">Your Manager : <span> James Bond</span></p>
                </div>
            </div>

        </div>
        <div class="clkdiv">
            <Clock></Clock>
        </div>
    </div>

    <div class="bottom">
        <div class="chtdiv">
            <!-- <Plotly :data="data" :layout="layout" :display-mode-bar="false"></Plotly> -->
            <chart v-bind:weekDatasetX="weekDatasetX" v-bind:weekDatasetY="weekDatasetY" v-bind:apiData="apiData"></chart>
        </div>
    </div>

</div>
</template>

<script>
import Clock from '../custom-elements/Clock.vue'
import axios from 'axios'
import moment from 'moment'
import Chart from '../custom-elements/Chart.vue'

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

        }

    },
    components: {
        Clock,
        Chart
    },
    created() {

        axios.get(`http://localhost:4000/api/users/${localStorage.getItem("id")}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then((res) => {
                this.apiData = res.data.user;
                if (this.apiData.workingtimes[0] != null) {
                    this.sumDailyWorkingtimesInHours();
                    this.generateWeekDataSet();
                    this.calcExtraUserInfo();
                }
            })
            .catch((error) => {
                console.error("Error = " + error)
            });

    },
    methods: {

        calcExtraUserInfo() {
            this.firstClockIn = moment(this.apiData.wtSortedByDay[this.apiData.wtSortedByDay.length - 1][0].start).format('HH.mm')
            this.lastClockOut = moment(this.apiData.wtSortedByDay[this.apiData.wtSortedByDay.length - 1][this.apiData.wtSortedByDay[this.apiData.wtSortedByDay.length - 1].length - 1].start).format('HH.mm')
            this.timeWorkedThisWeek = this.weekDatasetY.reduce((a, b) => a + b, 0).toFixed(2);
            this.timeWorkedToday = this.apiData.wtSortedByDay[this.apiData.wtSortedByDay.length - 1][0].totalDailyWtHours.toFixed(2);

            //we assume our employees work 7h a day, 5 days a week.
            if (this.timeWorkedThisWeek - 35 < 0) {
                this.timeToRecuperateThisWeek = 0;
                this.remainingWorkTimeThisWeek = this.timeWorkedThisWeek - 35;
            } else {
                this.timeToRecuperateThisWeek = this.timeWorkedThisWeek - 35;
                this.remainingWorkTimeThisWeek = 0;
            }
        },

        // GROUP OBJECTS BY PROPERTY
        groupBy(collection, property) {
            var i = 0,
                val, index,
                values = [],
                result = [];
            for (; i < collection.length; i++) {
                val = collection[i][property];
                index = values.indexOf(val);
                if (index > -1)
                    result[index].push(collection[i]);
                else {
                    values.push(val);
                    result.push([collection[i]]);
                }
            }
            return result;
        },

        // SORTS apiData AND GROUPS BY DAY, SUMS WORKINGTIMES IN ORDER TO HAVE totalDailyWtHours (in seconds)
        sumDailyWorkingtimesInHours() {

            this.apiData.workingtimes.forEach(element => {
                element['wtDurationInSeconds'] = Date.parse(element['end']).toString().slice(0, -3) - Date.parse(element['start']).toString().slice(0, -3);
                element['toSortDate'] = element['start'].toString().slice(0, -9);
                element['totalDailyWtHours'] = "";
            });

            this.apiData['wtSortedByDay'] = this.groupBy(this.apiData.workingtimes, 'toSortDate');

            for (var day of this.apiData.wtSortedByDay) {
                var totalDailyWtHours = 0;
                for (var wt of day) {
                    totalDailyWtHours += wt.wtDurationInSeconds;
                }
                day[0].totalDailyWtHours = totalDailyWtHours / 3600;
                totalDailyWtHours = 0
            }
            console.log("Data = " + JSON.stringify(this.apiData, null, 4)); ///////
        },

        // GET THE totalDailyWtHours AND dates FOR THE CURRENT WEEK
        generateWeekDataSet() {
            var currentDate = moment();
            var weekStart = currentDate.clone().startOf('week');
            var weekDatasetX2 = [];
            var weekDatasetY2 = [];
            var days = [];
            for (var i = 0; i <= 6; i++) {
                days.push(moment(weekStart).add(i, 'days').format("yyyy-MM-DD"));
            }
            for (var day of days) {
                for (var daywt of this.apiData.wtSortedByDay) {
                    if (day == daywt[0].toSortDate) {
                        weekDatasetX2.push(daywt[0].toSortDate);
                        weekDatasetY2.push(daywt[0].totalDailyWtHours);
                    }
                }
            }
            this.weekDatasetY = weekDatasetY2;
            this.weekDatasetX = weekDatasetX2;

        },
        // GET THE totalDailyWtHours OF THE CURRENT MONTH
        monthDataSet() {

        },
        // GET THE totalDailyWtHours OF THE LAST 10 DAYS
        tenDayDataSet() {

        }
    }

}
</script>

<style lang="scss" scoped>
$fontCol1: grey;
$fontCol2: rgb(197, 138, 138);

span {
    color: $fontCol2;
}

.top {
    height: 40%;
    width: 100%;
    display: flex;
}

.bottom {
    height: 55%;
    width: 98%;
    display: flex;
    justify-content: space-around;
}

.elm {
    width: 100%;
}

.main {
    width: 100%;
    height: 100%;
    position: relative;
}

.clkdiv {
    width: 22%;
    position: relative;
    margin-top: 0px;

}

.chtdiv {
    width: 70%;
    margin-left: 30%;
    position: relative;
    margin: auto;
}

.infodiv {
    width: 77%;
}

.title {
    margin-top: 0px;
    height: 25%;
    width: 100%;
    color: $fontCol1;
}

.elems {
    font-weight: bold;
    color: $fontCol1;
    display: flex;
    width: 100%;
}

.elem {
    width: 40%;
}

.elem1 {
    width: 60%;
}

.e1 {
    text-align: start;
    padding-left: 10%;
    font-size: 13px;
}

.e2 {
    text-align: start;
    padding-left: 20%;
    font-size: 13px;
}
</style>
