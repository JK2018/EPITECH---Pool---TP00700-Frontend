<template>
  <div class="bdy">
    <div class="maindiv2">

      <div class="innerDiv left">
        <div class="description">
          <h1>Welcome to Time Manager</h1>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem Sed ut perspiciatis Sed ut perspiciatis unde omnis iste natus error sit voluptatem unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
          <!--<a href="#" class="square_btn">Create account</a>-->
          <nav class="routerbtn">
            <router-link  to="/register">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Register
            </router-link>
          </nav>
        </div>
      </div>
      <div class="innerDiv right">
        <div class="loginForm">
          <h1>Sign in</h1>
          <form>
            <div class="user-box">
              <input v-model="email" type="email" name="" required>
              <label>Email Address</label>
            </div>
            <div class="user-box">
              <input v-model="password" type="password" name="" required>
              <label>Password</label>
            </div>
            <nav class="routerbtn">
              <div class="formSubmit" v-on:click="login">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Sign In
              </div>
            </nav>
          </form>

        </div>
      </div>

    </div>
  </div>
</template>




<script>
//import axios from 'axios'
export default {
  name: 'login',
  data(){
    return{
      password: "test",
      email: "test@test.com",

    }
  },
  methods: {
    login(){
      if(this.email.trim() !== "" && this.password.trim() !== ""){
        if(this.email.trim() === "test@test.com" && this.password.trim() === "test"){
          localStorage.setItem("token","test");
          this.$router.push({name:'dashboard'});
        }else{
          alert("Vérifier vos identifiants")
        }
      }else{
        alert("Veuillez remplir vos champs")
      }
    }
  }

}
</script>



<style scoped>
.bdy{
  position:absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  background: #334d50;
  background: -webkit-linear-gradient(to right, #cbcaa5, #334d50);
  background: linear-gradient(to right, #cbcaa5, #334d50);
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
  background-color:#272626;
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
  color: rgba(255, 255, 255, 0.555);
}
.loginForm{
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 50%;
  margin:auto;
  color: rgba(255, 255, 255, 0.555);
}







.loginForm .user-box {
  position: relative;
}

.loginForm .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.555);
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.555);
  outline: none;
  background: transparent;
}
.loginForm .user-box label {
  position: absolute;
  top:0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.555);
  pointer-events: none;
  transition: .5s;
}

.loginForm .user-box input:focus ~ label,
.loginForm .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #ff8b5f;
  font-size: 12px;
}

.routerbtn {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #ff8b5f;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px
}

.routerbtn:hover {
  background:  #ff8b5f;
  color: rgba(255, 255, 255, 0.555);
  border-radius: 5px;
  box-shadow: 0 0 5px  #ff8b5f,
  0 0 25px #ff8b5f,
  0 0 50px  #ff8b5f,
  0 0 100px  #ff8b5f;
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
  background: linear-gradient(90deg, transparent,  #ff8b5f);
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
  background: linear-gradient(180deg, transparent,  #ff8b5f);
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
  background: linear-gradient(270deg, transparent,  #ff8b5f);
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
  background: linear-gradient(360deg, transparent,  #ff8b5f);
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
