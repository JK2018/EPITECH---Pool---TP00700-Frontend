<template>
  <div class="home-container">
    <div class="sidebar">


      <div class="user-info">
        <div class="user-icon">
          <div class="avatar-icon-before"></div>
          <img class="avatar-icon" src="../assets/avat.png" />
        </div>
        <div class="user-name">
          <p class="welcome-txt">Welcome back</p>
          <h3 class="username-txt">Fabrice SUMSA</h3>
        </div>
      </div>
      <div class="user-menu">
        <div class="icon-btn">

          <BtnCustom
              @click.native="getMenu(1)"
              icon-name="las la-rocket"
              text-name="Dashboard"></BtnCustom>
          <BtnCustom
              @click.native="getMenu(2)"
              icon-name="las la-calendar"
              text-name="Calendar"></BtnCustom>
          <BtnCustom
              @click.native="logout"
              icon-name="las la-sign-out-alt"
              text-name="Logout"></BtnCustom>
        </div>
      </div>
    </div>

    <div class="dashboard">
      <div class="dsh-container">
        <Dashboard v-if="menuType === 1"></Dashboard>
        <SearchUser v-if="menuType === 2"></SearchUser>
      </div>
    </div>

  </div>
</template>

<script>
import BtnCustom from "@/custom-elements/BtnCustom";
import Dashboard from "@/components/Dashboard";
import SearchUser from "@/components/SearchUser";

export default {
  name: "HomePage",
  components: {
    SearchUser,
    Dashboard,
    BtnCustom,
    // CardCustom,
  },
  methods: {
    getMenu(val){
      this.menuType = val;
      console.log("Val = "+this.menuType)
    },
    logout(){
      localStorage.clear();
      this.$router.push({name:'login'});
    }
  },
  data() {
    return {
      menuType: 1,
    }
  }
}
</script>

<style scoped>

.home-container{
  display: flex;
  flex-direction: row;
  height: 100%;
}

.sidebar {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #cbc19d;
  /*background-color: #151012;*/
  width: 300px;
}

.dashboard {
  display: flex;
  flex-direction: column;
  background-color: #f5ffd9;
  width: 100%;
  height: 100%;
  color: black;
}

.dsh-container{
  height: 100%;
  padding: 30px;
}

.user-info {
  display: flex;
  flex-direction: column;
  margin: 80px auto;
}

.user-menu {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.avatar-icon {
  height: 150px;
  width: 150px;
  position: relative;
  z-index: 1;
  top: 35px;
  left: 6px;
}

.avatar-icon-before{
  content: "";
  position: absolute;
  border-radius: 50%;
  z-index: 0;
  background-color: #393235;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transform: scale(0.8);
}

.icon-btn {
  display: flex;
  flex-direction: column;
}


/*@font-face {*/
/*  font-family: bransleyBold;*/
/*  src: url("");*/
/*}*/

.welcome-txt{
  font-family: bransleyLight;
}
.username-txt{
  font-family: bransleyBold;
}

.user-icon {
  position: relative;
  margin: 0 auto;
}

.user-name {
  text-align: center;
  color: #242323;
}


</style>