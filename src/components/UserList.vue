<template>
<div class="home-body">

    <div class="searchbar">
        <div class="sbar">
            <input type="text" class="search-input-with-dropdown" />
            <!--<SearchBar></SearchBar>-->
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
    <list v-bind:apiData="apiData"></list>

</div>
</template>

<script>
//import SearchBar from '../custom-elements/SearchBar.vue'
import List from '../custom-elements/List.vue'
import axios from 'axios'
export default {
    components: {
        //SearchBar,
        List
    },
    data() {
        return {
            apiData: [],
        }
    },
    // FETCHES LIST OF ALL USERS
    created() {
        axios.get('http://localhost:4000/api/users/', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })
            .then((res) => {
                this.apiData = res.data.users.filter((el) => el.id != localStorage.getItem("id"));
                console.log("Data = " + JSON.stringify(this.apiData, null, 4));

            })
            .catch((error) => {
                console.error("Error = " + error)
            });

    },

}
</script>

<style lang="scss" scoped>
/*Fabrice Fabio*/
.search-input-with-dropdown {
    background-color: #cbc19d78;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
    height: 64px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    width: 500px;
    margin: 0 auto;
    outline: none;
    padding: 10px;
    border-radius: 8px;
}

.input-test {
    width: 100%;
    height: 100%;
}

/*Fabrice Fabio*/

/*JK*/
$background:#cbcaa5;
$border1: grey;
$background2: #334d50;

.sbar {
    margin-top: 3%;
    margin-bottom: 1%;
}

.home-body {
    width: 100%;
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

/*JK*/
</style>
