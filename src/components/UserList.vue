<template>

    <div class="home-body">

        <div class="searchbar">
            <div class="sbar">
                <SearchBar></SearchBar>
            </div>
            <div class="tglbtn-container">
                <i class="fas fa-user fa-2x"></i>
                <div class="tglbtn">
                    <input type="checkbox" id="toggle_checkbox">
                    <label for="toggle_checkbox"></label>  
                </div>
                <i class="fas fa-users fa-2x" style="margin-left: 5px;"></i>
            </div>
        </div>



        <div class="usr-list">
            <div class="usr">
                <p class="usr-content-name"><i class="fas fa-cog"></i><i class="fas fa-times-circle" style="color: rgb(216, 73, 73)"></i> John Rambo</p> 
                <p class="usr-content-email">rambo@pwn.com</p>
                <p class="usr-content-team" >Team n° 357</p>
            </div>
            <div class="usr">
                <p class="usr-content-name"><i class="fas fa-cog"></i><i class="fas fa-times-circle" style="color: rgb(216, 73, 73)"></i> John Doe</p>
                <p class="usr-content-email" >jd@gmail.com</p>
                <p class="usr-content-team" >Team n° 12</p>
            </div>
            <div class="usr">
                <p class="usr-content-name"><i class="fas fa-cog"></i><i class="fas fa-times-circle" style="color: rgb(216, 73, 73)"></i> Roger Rabbit</p>
                <p class="usr-content-email" >eadzedaedazed@gmail.com</p>
                <p class="usr-content-team" >Team n° 9</p>
            </div>
        </div>

	
    



 



    </div>  
</template>



<script>
import SearchBar from '../custom-elements/SearchBar.vue'
export default {
    components: {
        SearchBar
    },
    data(){
        return{
            apiData: [],
            
        }
    },
    methods:{

    },
    created(){
        // get request for all users and teams
    }
    
}
</script>



<style lang="scss" scoped>


$background:#cbcaa5;
$border1: grey;
$background2: #334d50;


i{ 
    font-size: 18px;
    margin-left: 2px;
    margin-right: 2px;
    font-weight: bold;
    color: $border1;
}
p{
    font-weight: bold;
    color: $border1;
}
.sbar{
    margin-top: 3%;
    margin-bottom: 1%;
}
.home-body{
  width: 100%;
}

.usr-list{
    margin-top: 5%;
}

.tglbtn-container{
    display: flex;
    width: 110px;
    margin: auto;
}

.tglbtn{
    width: 55px; 
    margin:auto;
}

.usr{
    position: relative;
    margin: auto;
    height: 30px;
    width: 90%;
    box-shadow: rgb(199, 199, 199) -4px 4px .2em;
    border-radius: .375em;
    margin-bottom: 10px;
    display:flex;
    justify-content:space-between;
    
}
.usr-content-name{
    height: 100%;
    width: 30%;
    position: relative;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 5px;
    text-align: start;
}
.usr-content-email{
    height: 100%;
    width: 30%;
    position: relative;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 5px;
    text-align: start;
}
.usr-content-team{
    height: 100%;
    width: 20%;
    position: relative;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 5px;
    text-align: end;
}







*
{
    -webkit-tap-highlight-color: transparent;
}

#toggle_checkbox
{
    display: none;
}

label
{
    position: relative;
    display: block;
    width: 45px;
    height: 25px;
    margin: auto;
    cursor: pointer;
    
}

label:before
{
    
    top: 3px;
    left: 6px;
    width: 18px;
    height: 18px;
    background: $background;
    border: 3px solid $background;
}

label:after
{
    
    right: 0;
    width: 40px;
    height: 24px;
    border: 3px solid $border1;
}

label:before, label:after
{
    content: "";
    position: absolute;
    border-radius: 50px;
    box-sizing: border-box;
    transition: 0.5s ease top, 0.5s ease left, 0.5s ease right, 0.5s ease width, 0.5s ease height, 0.5s ease border-color;
}

#toggle_checkbox:checked + label:before
{
    top: 3px;
    left: 24px;
    width: 18px;
    height: 18px;
    background: $background2;
    border-color: $background2;
}

#toggle_checkbox:checked + label:after
{
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