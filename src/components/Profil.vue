<template>
  <div class="home-body">
    <div class="maindiv" >

      <div class="img-profil">
        <img style="width: 100%; left: 100%" src="../assets/avat.png" alt="Avatar" class="round-avatar marg" >
      </div>

      <div>

        <div class="input-container">
          <input type="text" v-model="userName" required=""/>
          <label>Username</label>
        </div>

        <div class="input-container">
          <input type="text" v-model="firstName" required=""/>
          <label>Firstname</label>
        </div>

        <div class="input-container">
          <input type="text" v-model="lastName" required=""/>
          <label>Lastname</label>
        </div>

        <div class="input-container">
          <input type="text" v-model="email" required=""/>
          <label>Email</label>
        </div>

        <div class="input-container">
          <input v-model="password" type="password" required=""/>
          <label>Password</label>
        </div>

        <button v-on:click="passwordAccept" class="button">Submit</button>

      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Profil",
  components: {
  },
  mounted() {
    axios.get('http://localhost:4000/api/users/'+localStorage.getItem("id"),{
      headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}
    })
        .then(res=>{
          console.log("Test= "+JSON.stringify(res.data,null,4));
          console.log("Test= "+JSON.stringify(res.data.user.id,null,4));
          this.userName = res.data.user.username;
          this.lastName = res.data.user.lastname;
          this.firstName = res.data.user.firstname;
          this.email = res.data.user.email;
        })
        .catch(err=>{
          console.log("err="+err)
        })
  },
  data: function() {
    return {
      password: "",
      firstName: "",
      lastName: "",
      userName: "",
      email:"",
    }
  },
  methods: {
    passwordAccept() {
      axios.put('http://localhost:4000/api/users/'+localStorage.getItem("id"),{
        username: this.userName,
        firstname: this.firstName,
        lastname: this.lastName,
        email: this.email,
        password: this.password,
      }, {
        headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}
      })
          .then(res=>{
            console.log("Res update= "+JSON.stringify(res.data,null,4));
          })
          .catch(err=>{
            console.log("err="+err)
          })
    },
  }
}
</script>

<style scoped>

.text-center{
	color:#fff;	
	text-transform:uppercase;
    font-size: 30px;
    margin: -50px 0 80px 0;
    display: block;
    text-align: center;
}
.input-container{
	position:relative;
  margin: 0 auto;
  padding-bottom: 50px;
  width: 50%;
}
.input-container label{
	position:absolute;
	top:0;
	left:0;
	font-size:16px;
	color:rgba(17, 17, 17, 0.815);	
	transition: all 0.2s ease-in-out;
}
.input-container input{ 
  border:0;
  border-bottom:1px solid #555;  
  background:transparent;
  width:100%;
  font-size:16px;
	color:rgba(17, 17, 17, 0.815);
}
.input-container input:focus ~ label,
.input-container input:valid ~ label{
	top:-20px;
  left: 0;
	font-size:12px;
	
}

.home-body{
  width: 100%
}

.maindiv{
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  width: 81%;
  margin: 5% auto 0;
  background-color: white;
}

.round-avatar {
    border-radius: 100%;
}
.button {
  background-color: grey;
  color: white;
  padding: 12px;
  height: 40px;
  width: 180px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-bottom: 20px;
  transition-duration: 0.3s;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid grey;
}

.button:hover {
  background-color: rgba(255, 255, 255, 0);
  color: black;
}

.img-profil{
  width: 200px;
  height: 200px;
  margin: 0 auto;
  padding: 15px 0;
}

textarea:focus, input:focus{
  outline: none;
}
</style>