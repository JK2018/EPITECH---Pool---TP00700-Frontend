<template>
  <div class="profil border-round" style="padding: 70px 0">
    <div class="maindiv innerDiv" style="padding: 20px 0">
      <div>
        <img src="../assets/Bastien.jpeg" alt="Avatar" class="round-avatar" >
      </div>

      <br>
      <br>

      <div class="">
          <md-field class="display-in-line marg"  style="width: 25%">
          <label>First Name</label>
          <md-input v-model="first_name"></md-input>
          </md-field>

          <md-field class="display-in-line marg" style="width: 25%">
          <label>Last Name</label>
          <md-input v-model="last_name"></md-input>
          </md-field>

          <br>  


          <md-field class="center marg" style="width: 51%">
            <label>Your Mail Adress</label>
            <md-input v-model="adress_mail"></md-input>
            <span class="md-suffix">@epitech.eu</span>
          </md-field>

          <br>

          <md-field class="center marg" style="width: 51%">
          <label>Your Complete Adress</label>
          <md-input v-model="complete_adress"></md-input>
          </md-field>

          <br>

          <md-field class="center marg" style="width: 51%">
          <label>Phone Number</label>
          <md-input type="number" v-model="phone_number"></md-input>
          </md-field>

          <br>

          <md-field class="display-in-line marg" style="width: 25%">
            <label>Tape Your Current Password or a New One</label>
            <md-input v-model="passw1" type="password"></md-input>
          </md-field>


          <md-field class="display-in-line marg" style="width: 25%">
            <label>Tape The Same Password</label>
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
      if (this.passw1 == this.passw2) {
        alert("Same Password");
        this.numberphoneAccept()
      }
      else
        alert("Different Password")
    },
    // numberphoneAccept () {
    //   if (typeof this.phone_number == 'number')
    //     alert("Nice Phone Number")
    //   else
    //     alert("That a Fake One")
    // }
  }
}
</script>

<style scoped>
.border-round {
  border-radius: 10%;
}

.maindiv{
  position: relative;
  top: 50%;
  margin-right: 10%;
  margin-left: 10%;
  height: 700px;
  background-color: #cbcaa5;
}

.innerDiv{
  background-color: antiquewhite;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  opacity: 0.8;
}

.marg {
  margin: 10px
}

.backgroundwhite {
  background-color: antiquewhite;
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