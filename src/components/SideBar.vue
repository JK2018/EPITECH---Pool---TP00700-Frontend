<template>
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
            link="/app/dashboard"
            icon-name="las la-rocket"
            text-name="Dashboard"></BtnCustom>
        <BtnCustom
            link="/app/user-list"
            icon-name="las la-user-friends"
            text-name="Userlist"></BtnCustom>
        <BtnCustom
            link="/app/profil"
            icon-name="las la-user-cog"
            text-name="Profil"></BtnCustom>
        <button
            v-on:click="logout">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
import BtnCustom from "@/custom-elements/BtnCustom";
export default {
  name: "SideBar",
  components: {
    BtnCustom

  },
  methods: {
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
.sidebar {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #cbc19d;
  /*background-color: #151012;*/
  width: 300px;
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