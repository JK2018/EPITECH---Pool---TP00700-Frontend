<template>
<div class="home-body">

    <div class="searchbar">
        <div class="sbar">
            <SearchBar></SearchBar>
        </div>
        <div class="tglbtn-container">
            <i class="fas fa-user fa-2x" style="margin-left: 5px; font-size:30px;"></i>
            <div class="tglbtn">
                <input type="checkbox" id="toggle_checkbox">
                <label for="toggle_checkbox"></label>
            </div>
            <i class="fas fa-users fa-2x" style="margin-left: 5px; font-size:30px;"></i>
        </div>
    </div>

    <div class="usr-list" id="users">
        <div class="usr" v-for="(user, index) in this.apiData" :key="index">

            <p class="usr-content-name">{{user.firstname}} {{user.lastname}}</p>

            <p class="usr-content-email">{{user.email}}</p>

            <span v-if="user.clock != null">
                <p v-if="user.clock.status">status : On Site</p>
                <p v-else>status : Off Site</p>
            </span>
            <span v-else>
                <p>status : Off Site</p>
            </span>

            <p v-if="user.team_id" p class="usr-content-team">Team n° {{user.team_id}}</p>
            <p v-if="!user.team_id" p class="usr-content-team">No Team</p>

            <span v-if="role == 2" v-bind:class="role">
                <span v-if="user.roles.label == 'manager'">
                    <i class="fas fa-user-tie"></i>
                </span>
                <span v-else>
                    <a v-on:click="promoteUser(user.id)"><i class="fas fa-medal"></i></a>
                </span>

                <a v-on:click="deleteUser(user.id, index)"><i class="fas fa-times-circle" style="color: rgb(216, 73, 73)"></i></a>

            </span>
        </div>
    </div>

</div>
</template>

<script>
import SearchBar from '../custom-elements/SearchBar.vue'
import axios from 'axios'
export default {
    components: {
        SearchBar
    },
    data() {
        return {
            role: 9,
            apiData: [],
            status: "",
            //userId: null

        }
    },
    methods: {
        deleteUser(id, index) {
            axios.delete(`http://localhost:4000/api/users/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                    }
                })
                .then((result) => {
                    console.log("Data = " + JSON.stringify(result, null, 4));
                    // alert msg? or modale?
                    this.apiData.splice(index, 1);
                })
                .catch((error) => {
                    console.error("Error = " + error)
                });

        },

        promoteUser(id) {

            axios.put('http://localhost:4000/api/promote/' + id, {}, {
                headers: {
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImV4cCI6MTYwNDU4MDUyMywiaWQiOjQsInJvbGUiOiJnZW5lcmFsX21hbmFnZXIiLCJ1c2VybmFtZSI6IlRoZUJvc3MifQ.o66VonKQD0Xd50xxaDo2vWRIPiyRn9aIZahVWrAYqHw`
                }
            }).then((result) => {
                console.log("Data = " + JSON.stringify(result, null, 4));
            }).catch((error) => {
                console.error("Error = " + error)
            });
            console.log(id);
            // axios.put(`http://localhost:4000/api/promote/${id}`, {
            //         headers: {
            //             'Authorization': `Bearer ${localStorage.getItem("token")}`
            //         }
            //     })
            //     .then((result) => {
            //         console.log("Data = " + JSON.stringify(result, null, 4));
            //     })
            //     .catch((error) => {
            //         console.error("Error = " + error)
            //     });
        }
    },
    created() {

        axios.get('http://localhost:4000/api/users/', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then((res) => {
                this.apiData = res.data.users;
                console.log("Data = " + JSON.stringify(this.apiData, null, 4)); ///////

                var r = localStorage.getItem("role").toString();
                if (r === "manager") {
                    this.role = 1
                } else if (r === "user") {
                    this.role = 0
                } else {
                    this.role = 2
                }

            })
            .catch((error) => {
                console.error("Error = " + error)
            });

    },

}
</script>

<style lang="scss" scoped>
$background:#cbcaa5;
$border1: grey;
$background2: #334d50;

a {
    cursor: pointer;
}

i {
    font-size: 18px;
    margin-left: 2px;
    margin-right: 2px;
    font-weight: bold;
    color: $border1;
}

p {
    font-weight: bold;
    color: $border1;
}

.sbar {
    margin-top: 3%;
    margin-bottom: 1%;
}

.home-body {
    width: 100%;
}

.usr-list {
    margin-top: 5%;
}

.tglbtn-container {
    display: flex;
    width: 110px;
    margin: auto;
}

.tglbtn {
    width: 55px;
    margin: auto;
}

.usr {
    padding-top: 10px;
    position: relative;
    margin: auto;
    height: 40px;
    width: 90%;
    // background: rgb(248, 248, 248);
    // box-shadow: rgb(199, 199, 199) -4px 4px .2em;
    border-bottom: solid grey 1px;
    // border-radius: .375em;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;

}

.usr-content-name {
    height: 100%;
    width: 30%;
    position: relative;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 5px;
    text-align: start;
}

.usr-content-email {
    height: 100%;
    width: 30%;
    position: relative;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 5px;
    text-align: start;
}

.usr-content-team {
    height: 100%;
    width: 20%;
    position: relative;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 5px;
    text-align: end;
}

* {
    -webkit-tap-highlight-color: transparent;
}

#toggle_checkbox {
    display: none;
}

label {
    position: relative;
    display: block;
    width: 45px;
    height: 25px;
    margin: auto;
    cursor: pointer;

}

label:before {

    top: 3px;
    left: 6px;
    width: 18px;
    height: 18px;
    background: $background;
    border: 3px solid $background;
}

label:after {

    right: 0;
    width: 40px;
    height: 24px;
    border: 3px solid $border1;
}

label:before,
label:after {
    content: "";
    position: absolute;
    border-radius: 50px;
    box-sizing: border-box;
    transition: 0.5s ease top, 0.5s ease left, 0.5s ease right, 0.5s ease width, 0.5s ease height, 0.5s ease border-color;
}

#toggle_checkbox:checked+label:before {
    top: 3px;
    left: 24px;
    width: 18px;
    height: 18px;
    background: $background2;
    border-color: $background2;
}

#toggle_checkbox:checked+label:after {
    top: 0px;
    right: 0px;
    width: 40px;
    height: 24px;
    border-color: $border1;
}

* {
    border: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
</style>
