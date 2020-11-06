<template>
  <div class="bdy">
    <div class="maindiv2">

      <div class="innerDiv left">
        <div class="description">
          <h1>Welcome to Time Manager</h1>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem Sed ut perspiciatis Sed ut perspiciatis unde omnis iste natus error sit voluptatem unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
          <!--<a href="#" class="square_btn">Create account</a>-->
          <nav class="routerbtn">
            <router-link  to="/login">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Login
            </router-link>
          </nav>
        </div>
      </div>
      <div class="innerDiv right">
        <div class="loginForm">
          <h1>Create Account</h1>
          <form @submit="submitForm">
            <div class="user-box">
              <input v-model="userName" type="text" name="" required>
              <label>User Name</label>
            </div>
            <div class="user-box">
              <input v-model="firstName" type="text" name="" required>
              <label>First Name</label>
            </div>
            <div class="user-box">
              <input v-model="lastName" type="text" name="" required>
              <label>Last Name</label>
            </div>
            <div class="user-box">
              <input v-model="email" type="email" name="" required>
              <label>Email Address</label>
            </div>
            <div class="user-box">
              <input v-model="password" type="password" name="" required>
              <label>Password</label>
            </div>
            <nav class="routerbtn">
              <button type="submit" class="formSubmit" >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Sign up
              </button>
            </nav>
          </form>

        </div>
      </div>

    </div>
  </div>
</template>




<script>

import axios from "axios";

export default {
  name: 'registration',
  data(){
    return{
      userName: "Michel",
      firstName: "Michel",
      lastName: "Michel",
      email: "Michel@michel.com",
      password: "Michel",
    }
  },
  methods:{
    submitForm: function (e){
      //http://3.87.227.113:4000/test
      axios.post("http://localhost:4000/sessions/sign_up", {
        username: this.userName,
        firstname: this.firstName,
        lastname: this.lastName,
        email: this.email,
        password: this.password,
      })
      .then(function (res) {
        console.log("Res = "+res);
        console.log("data = "+res.data.result);
        alert("Vous pouvez vous connectez")
        window.location.href = "/login"
      })
      .catch(function (err){
        console.log(err.response.data);
        console.log("err1 : "+err.response.data.errors.email);
        console.log("err2 : "+err.response.data.errors.username);
        if(err.response.data.errors.email !== undefined){
          alert("Cette adresse email existe déjà");
        }
        else if(err.response.data.errors.username !== undefined){
          alert("Cet username existe déjà");
        }
      })
      ;

      e.preventDefault();
    }
  }

}
</script>



<style lang="scss" scoped>


$gradiantCol1: #cbcaa5;
$gradiantCol2: #334d50;
$btnCol:#ff8b5f;
$divBackgroundCol:#272626;
$fontCol:rgba(255, 255, 255, 0.555);


.bdy{

  position:absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  background: $gradiantCol2;
  background: -webkit-linear-gradient(to right, $gradiantCol1, $gradiantCol2);
  background: linear-gradient(to right, $gradiantCol1, $gradiantCol2);
}
.maindiv2{
  display: flex;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin-right: 10%;
  margin-left: 10%;
  height: 700px;
  background-image: url('../assets/marble.jpg');
}
.innerDiv{
  background-color:$divBackgroundCol;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
}
.innerDiv.left{
  width: 60%;
}
.innerDiv.right{
  width: 40%;
  opacity: 0.9;
}
.description{
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 60%;
  margin:auto;
  color: $fontCol;
}
.loginForm{
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 50%;
  margin:auto;
  color: $fontCol;
}







.loginForm .user-box {
  position: relative;
}

.loginForm .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: $fontCol;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid $fontCol;
  outline: none;
  background: transparent;
}
.loginForm .user-box label {
  position: absolute;
  top:0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: $fontCol;
  pointer-events: none;
  transition: .5s;
}

.loginForm .user-box input:focus ~ label,
.loginForm .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: $btnCol;
  font-size: 12px;
}

.routerbtn {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: $btnCol;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px
}

.routerbtn button{
  outline: none; background: no-repeat;
  border: 0; color: #ff8b5f; font-size: 16px;
}

.routerbtn button:hover{
  color: white;
}

.routerbtn:hover {
  background:  $btnCol;
  color: $fontCol;
  border-radius: 5px;
  box-shadow: 0 0 5px  $btnCol,
  0 0 25px $btnCol,
  0 0 50px  $btnCol,
  0 0 100px $btnCol;
}

.routerbtn span {
  position: absolute;
  display: block;
}

.formSubmit span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent,  $btnCol);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
}

.formSubmit span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent,  $btnCol);
  animation: btn-anim2 1s linear infinite;
  animation-delay: .25s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
}

.formSubmit span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent,  $btnCol);
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
}

.formSubmit span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent,  $btnCol);
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
}


</style>
