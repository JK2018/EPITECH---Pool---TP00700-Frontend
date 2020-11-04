<template>
  <div class="home-body">
    <div class="maindiv" id="capsule" style="height: 700px">

      <div id="photo">
        <img src="../assets/Bastien.jpeg" alt="Avatar" class="round-avatar marg" >
      </div>
      <br><br>
      <div>
        
        <div class="input-container display-in-line marg" style="width: 25%">
          <input type="text" v-model="FirstName" required=""/>
          <label>First Name</label>		
        </div>

        <div class="input-container display-in-line marg" style="width: 25%">
          <input type="text" v-model="LastName" required=""/>
          <label>Last Name</label>		
        </div> 

        <br>

        <div class="input-container center marg" style="width: 51%">
          <input type="text" v-model="eMailAdress" required=""/>
          <label>Your eMail Adress</label>
        </div>

        <br>

        <div class="input-container center marg" style="width: 51%">
          <input type="text" v-model="CompleteAdress" required=""/>
          <label>Your Complete Adress</label>
        </div>

        <br>

        <div class="input-container center marg" style="width: 51%">
          <input type="tel" v-model="PhoneNumber" required=""/>
          <label>Phone Number</label>
        </div>

        <br>

        <div class="input-container display-in-line marg" style="width: 25%">
          <input v-model="passw1" type="password" required=""/>
          <label>Password</label>
        </div>
      
        <div class="input-container display-in-line marg" style="width: 25%">
          <input v-model="passw2" type="password" required=""/>
          <label>Repeat Password</label>
        </div>

        <br>
        <br>
        <br>

        <button v-on:click="passwordAccept" class="button button1">Submit</button>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Profil",
  components: {
  },
  data: function() {
    return {
      passw1: "",
      passw2: "",
      FirstName: "Patrick",
      LastName: "Benzidane",
      eMailAdress:"patrick.benzidane@epitech.eu",
      CompleteAdress: "2 Boulevard des Bagaudes, Paris 75000",
      phone_number: 2345677653
    }
  },
  methods: {
    passwordAccept() {
      if (this.passw1 === this.passw2) 
        alert("Same Password" + this.FirstName + this.LastName + this.eMailAdress + this.CompleteAdress + this.phone_number);
      else
        alert("Different Password")
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
	margin-bottom:20px;
}
.input-container label{
	position:absolute;
	top:0px;
	left:0px;
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
	top:-12px;
	font-size:12px;
	
}
.marg {
  padding: 8px;
}

.home-body{
  width: 100%
}

.maindiv{
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  width: 81%;
  margin: 5% auto 0;
}

.center {
  margin: auto;
}

.display-in-line {
    display: inline-block;
    width: 100%;
}

.round-avatar {
    border-radius: 100%;
}
.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: rgba(255, 255, 255, 0.041);
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.3s;
  cursor: pointer;
  border-radius: 10%;
}
.button1 {
  background-color: rgba(255, 255, 255, 0); 
  color: black; 
  border: 1px solid grey;
}

.button1:hover {
  background-color: grey;
  color: white;
}
</style>