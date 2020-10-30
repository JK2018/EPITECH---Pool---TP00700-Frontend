<template>
  <div class="home-body">
    <div class="maindiv">
      <div>
        <img src="../assets/Bastien.jpeg" alt="Avatar" class="round-avatar" >
      </div>
      <br><br>
      <div class="">
        <md-field class="display-in-line marg"  style="width: 25%">
          <label>First Name</label>
          <md-input></md-input>
        </md-field>

        <md-field class="display-in-line marg" style="width: 25%">
          <label>Last Name</label>
          <md-input></md-input>
        </md-field>

        <br>


        <md-field class="center marg" style="width: 51%">
          <label>Your Mail Adress</label>
          <md-input></md-input>
          <span class="md-suffix">@epitech.eu</span>
        </md-field>

        <br>

        <md-field class="center marg" style="width: 51%">
          <label>Your Complete Adress</label>
          <md-input></md-input>
        </md-field>

        <br>

        <md-field class="center marg" style="width: 51%">
          <label>Phone Number</label>
          <md-input type="number" v-model="phone_number"></md-input>
        </md-field>

        <br>

        <md-field class="display-in-line marg" style="width: 25%">
          <label>New Password</label>
          <md-input v-model="passw1" type="password"></md-input>
        </md-field>


        <md-field class="display-in-line marg" style="width: 25%">
          <label>Confirm new password</label>
          <md-input v-model="passw2" type="password"></md-input>
        </md-field>

        <br>
        <br>
        <br>

        <md-button class="md-accent">Cancel</md-button>
        <md-button class="md-primary" v-on:click="passwordAccept" >Submit</md-button>

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
      phone_number: Number
    }
  },
  methods: {
    passwordAccept() {
      if (this.passw1 === this.passw2) {
        alert("Same Password");
      }
      else
        alert("Different Password")
    },
  }
}
</script>

<style scoped>
.home-body{
  width: 100%
}

.maindiv{
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  width: 81%;
  margin: 5% auto 0;
}


.marg {
  margin: 10px
}

.center {
  margin: auto;
}

.display-in-line {
    display:inline-block;
}

.round-avatar {
    border-radius: 100%;
}
</style>