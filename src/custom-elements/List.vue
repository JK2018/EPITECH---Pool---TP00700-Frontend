<template>
<div class="usr-list" id="users">
    <div class="usr" v-for="(user, index) in this.apiData" :key="index">

        <p class="usr-content-name">{{user.firstname}} {{user.lastname}}</p>

        <p class="usr-content-email">{{user.email}}</p>

        <span>
            <p v-if="user.clock.status">status : <span style="color: green">On Site</span></p>
            <p v-else>status : <span style="color: red">Off Site</span></p>
        </span>

        <p v-if="user.team_id" p class="usr-content-team">Team n° {{user.team_id}}</p>
        <p v-if="!user.team_id" p class="usr-content-team">No Team</p>

        <span v-if="role == 2" v-bind:class="role">
            <span v-if="user.roles.label == 'manager'">
                <a v-on:click="demoteUser(user.id, index)"><i class="fas fa-user-tie"></i></a>
            </span>
            <span v-else>
                <a v-on:click="promoteUser(user.id, index)"><i class="fas fa-medal"></i></a>
            </span>

            <a v-on:click="deleteUser(user.id, index)"><i class="fas fa-times-circle" style="color: rgb(216, 73, 73)"></i></a>

        </span>
    </div>
</div>
</template>

<script>
// scallable. pass apiData in props
import axios from 'axios'
export default {
    name: "List",
    props: ["apiData"],
    data() {
        return {
            role: 9,
            status: "",
        }
    },
    methods: {

        // DELETES USER FROM LIST AND DB
        deleteUser(id, index) {
            axios.delete(`http://localhost:4000/api/users/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                    }
                })
                .then((result) => {
                    console.log("Data = " + JSON.stringify(result, null, 4));
                    this.apiData.splice(index, 1);
                })
                .catch((error) => {
                    console.error("Error = " + error)
                });
        },

        //CHANGED USER ROLE FROM USER TO MANAGER IN DB, ALSO SETS ICON ACCORDINGLY
        promoteUser(id, index) {
            axios.put('http://localhost:4000/api/promote/' + id, {}, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }).then((result) => {
                console.log("Data = " + JSON.stringify(result, null, 4));
                this.apiData[index].roles.label = "manager";
            }).catch((error) => {
                console.error("Error = " + error)
            });
        },

        //CHANGED USER ROLE FROM MANAGER TO USER IN DB, ALSO SETS ICON ACCORDINGLY
        demoteUser(id, index) {
            axios.put('http://localhost:4000/api/demote/' + id, {}, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            }).then((result) => {
                this.apiData[index].roles.label = "user";
                console.log("Data = " + JSON.stringify(result, null, 4));
            }).catch((error) => {
                console.error("Error = " + error)
            });
            console.log(id);
        }
    },

    created() {

        var r = localStorage.getItem("role").toString();
        if (r === "manager") {
            this.role = 1
        } else if (r === "user") {
            this.role = 0
        } else {
            this.role = 2
        }
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
    border-bottom: solid grey 1px;
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
</style>
