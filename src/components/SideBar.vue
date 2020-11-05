<template>
<div class="sidebar">
    <div class="user-info">
        <div class="user-icon">
            <div class="avatar-icon-before"></div>
            <img class="avatar-icon" src="../assets/avat.png" />
        </div>
        <div class="user-name">
            <p class="welcome-txt">Welcome back,</p>
            <h4 class="username-txt">{{ username }}</h4>
        </div>
    </div>
    <div class="user-menu">
        <div class="icon-btn">
            <BtnCustom link="/app/dashboard" icon-name="las la-rocket" text-name="Dashboard" v-bind:class="getClass('/app/dashboard')"></BtnCustom>
            <BtnCustom link="/app/reports" icon-name="las la-chart-bar" text-name="Reports" v-bind:class="getClass('/app/reports')"></BtnCustom>
            <BtnCustom link="/app/user-list" icon-name="las la-user-friends" text-name="Userlist" v-bind:class="getClass('/app/user-list')"></BtnCustom>
            <!-- link="/app/profil"
            icon-name="las la-user-cog"
            text-name="Profil"></BtnCustom>
          <div v-on:click="logout" class="btn-view">
            <i class="fas fa-sign-out-alt"></i>
            <span >Logout</span>
          </div> -->
            <BtnCustom link="/app/profil" icon-name="las la-user-cog" text-name="Profil" v-bind:class="getClass('/app/profil')"></BtnCustom>
        </div>
    </div>
    <div class="bottom-sidebar">
        <b-button v-on:click="logout" variant="outline-secondary">Logout</b-button>
    </div>
</div>
</template>

<script>
import BtnCustom from "@/custom-elements/BtnCustom";
import axios from "axios";

export default {
    name: "SideBar",
    components: {
        BtnCustom,
    },
    computed: {},
    mounted: function () {
        // console.log(this.$route);
        this.username = localStorage.getItem("username");
    },
    methods: {
        getClass(test) {
            console.log(test, this.$route.path);
            return {
                "is-active": test === this.$route.path,
            };
        },
        testprivateroute() {
            console.log("my token = " + localStorage.getItem("token"));
            axios
                .get("http://localhost:4000/api/test", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    },
                })
                .then((res) => {
                    console.log("Res= " + JSON.stringify(res.data, null, 4));
                })
                .catch((err) => {
                    console.log("err=" + err);
                });
        },
        logout() {
            localStorage.clear();
            this.$router.push({
                name: "login"
            });
        },
    },
    data() {
        return {
            menuType: 1,
            username: "",
        };
    },
};
</script>

<style lang="scss" scoped>
$background: #cbc19d;
$backgroundAvatar: #393235;
$fontCol: #242323;

.sidebar {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    background-color: $background;
    width: 20%;
}

.user-info {
    display: flex;
    flex-direction: column;
    margin: 25px auto 100px;
}

.user-menu {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
}

.avatar-icon {
    height: 150px;
    width: 150px;
    position: relative;
    z-index: 1;
    top: 35px;
    left: 6px;
}

.avatar-icon-before {
    content: "";
    position: absolute;
    border-radius: 50%;
    z-index: 0;
    background-color: $backgroundAvatar;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transform: scale(0.8);
}

.icon-btn {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    // width: 150px;

    .is-active {
        background-color: rgb(255, 240, 217);
        border-radius: 10px;
    }

    .btn-view {
        padding: 4px 30px;

        &:hover {
            @extend .is-active;
            transition: background-color 0.4s;
        }
    }
}

.btn-view {
    align-items: center;
    display: flex;
    text-decoration: none;
    color: $fontCol;
    letter-spacing: 1px;
    display: inline-flex;
    margin: 5px;
    cursor: pointer;
}

.icon-btn span {
    font-size: 18px;
    letter-spacing: 0px;
}

.user-icon {
    position: relative;
    margin: 0 auto;
}

.user-name {
    text-align: center;
    color: $fontCol;
}

.btn-view i {
    margin-right: 25px;
    font-size: 30px;
}

.welcome-txt {
    margin-top: 20px;
}

.username-txt {
    font-weight: 600;
}

.bottom-sidebar {
    margin-top: auto;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20%;
    display: flex;
    flex-direction: column;
}
</style>
