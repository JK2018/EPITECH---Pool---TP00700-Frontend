<template>

    <div class="main">

        <div class="searchbar">
            <form action="" class="search-bar">
                <input type="search" name="search" pattern=".*\S.*" required>
                <button class="search-btn" type="submit">
                </button>
              
            </form>
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
                <p class="usr-content-name">John Rambo</p>
                <p class="usr-content-email" >rambo@pwn.com</p>
                <p class="usr-content-team" >Team n° 357</p>
            </div>
            <div class="usr">
                <p class="usr-content-name">John Doe</p>
                <p class="usr-content-email" >jd@gmail.com</p>
                <p class="usr-content-team" >Team n° 12</p>
            </div>
            <div class="usr">
                <p class="usr-content-name">Roger Rabbit</p>
                <p class="usr-content-email" >eadzedaedazed@gmail.com</p>
                <p class="usr-content-team" >Team n° 9</p>
            </div>
        </div>

	
    



 



    </div>  
</template>



<script>

export default {
    components: {
        
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



<style scoped>

.usr-list{
    margin-top: 5%;
}

.tglbtn-container{
    display: flex;
    width: 110px;
    margin: auto;
}
i{
    color: grey;
}
.tglbtn{
    width: 55px; 
    margin:auto;
}

.usr{
    position: relative;
    margin: auto;
    height: 30px;
    width: 70%;
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
    background: #cbcaa5;
    border: 3px solid #cbcaa5;
}

label:after
{
    
    right: 0;
    width: 40px;
    height: 24px;
    border: 3px solid grey;
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
    background: #334d50;
    border-color: #334d50;
}

#toggle_checkbox:checked + label:after
{
    top: 0px;
    right: 0px;
    width: 40px;
    height: 24px;
    border-color: grey;
}








* {
	border: 0;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
:root {
	font-size: calc(16px + (24 - 16)*(100vw - 320px)/(1920 - 320));
}
button, input {
	font: 1em Hind, sans-serif;
	line-height: 1.5em;
}
 input {
	color: #171717;
    
}
 .search-bar {
	display: flex;
    width: 100px;
    height: 85px;
    margin-bottom: 20px;
    
}

.search-bar input,
.search-btn, 
.search-btn:before, 
.search-btn:after {
	transition: all 0.25s ease-out;
}
.search-bar input,
.search-btn {
	width: 3em;
	height: 3em;
}
.search-bar input:invalid:not(:focus),
.search-btn {
	cursor: pointer;
}
.search-bar,
.search-bar input:focus,
.search-bar input:valid  {
	width: 100%;
}
.search-bar input:focus,
.search-bar input:not(:focus) + .search-btn:focus {
	outline: transparent;
}
.search-bar {
	margin: auto;
	padding: 1.5em;
	justify-content: center;
	max-width: 70%;
}
.search-bar input {
	background: transparent;
	border-radius: 1.5em;
	box-shadow: 0 0 0 0.4em #171717 inset;
	padding: 0.75em;
	transform: translate(0.5em,0.5em) scale(0.5);
	transform-origin: 100% 0;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}
.search-bar input::-webkit-search-decoration {
	-webkit-appearance: none;
}
.search-bar input:focus,
.search-bar input:valid {
	background: #fff0d9;
	border-radius: 0.375em 0 0 0.375em;
	box-shadow: 0 0 0 0.1em #fff0d9 inset;
	transform: scale(1);
}
.search-btn {
	background: #171717;
	border-radius: 0 0.75em 0.75em 0 / 0 1.5em 1.5em 0;
	padding: 0.75em;
	position: relative;
	transform: translate(0.25em,0.25em) rotate(45deg) scale(0.25,0.125);
	transform-origin: 0 50%;
}
.search-btn:before, 
.search-btn:after {
	content: "";
	display: block;
	opacity: 0;
	position: absolute;
}
.search-btn:before {
	border-radius: 50%;
	box-shadow: 0 0 0 0.2em #fff0d9 inset;
	top: 0.75em;
	left: 0.75em;
	width: 1.2em;
	height: 1.2em;
}
.search-btn:after {
	background: #fff0d9;
	border-radius: 0 0.25em 0.25em 0;
	top: 51%;
	left: 51%;
	width: 0.75em;
	height: 0.25em;
	transform: translate(0.2em,0) rotate(45deg);
	transform-origin: 0 50%;
}
.search-btn span {
	display: inline-block;
	overflow: hidden;
	width: 1px;
	height: 1px;
}

/* Active state */
.search-bar input:focus + .search-btn,
.search-bar input:valid + .search-btn {
	background: #334d50;
  background: -webkit-linear-gradient(to right, #cbcaa5, #334d50);
  background: linear-gradient(to right, #cbcaa5, #334d50);
	border-radius: 0 0.375em 0.375em 0;
	transform: scale(1);
}
.search-bar input:focus + .search-btn:before, 
.search-bar input:focus + .search-btn:after,
.search-bar input:valid + .search-btn:before, 
.search-bar input:valid + .search-btn:after {
	opacity: 1;
}
.search-bar input:focus + .search-btn:hover,
.search-bar input:valid + .search-btn:hover,
.search-bar input:valid:not(:focus) + .search-btn:focus {
	background: #334d50;
}
.search-bar input:focus + .search-btn:active,
.search-bar input:valid + .search-btn:active {
	transform: translateY(1px);
}

@media screen and (prefers-color-scheme: dark) {
	
	.search-bar input {
		box-shadow: 0 0 0 0.4em grey inset;
	}
	.search-bar input:focus,
	.search-bar input:valid {
		background: #fff0d9;
		box-shadow: rgb(199, 199, 199) -3px 3px .3em;
	}
	.search-btn {
		background: grey;
	}
}

</style>