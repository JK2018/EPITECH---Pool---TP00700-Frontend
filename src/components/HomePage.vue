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
          <BtnCustom icon-name="las la-rocket"
                     text-name="Dashboard"></BtnCustom>
        </div>
<!--        <div class="icon-btn">-->
<!--          <BtnCustom text-name="Clients"></BtnCustom>-->
<!--        </div>-->
<!--        <div class="icon-btn">-->
<!--          <BtnCustom text-name="Invoices"></BtnCustom>-->
<!--        </div>-->
<!--        <div class="icon-btn">-->
<!--          <BtnCustom text-name="Estimates"></BtnCustom>-->
<!--        </div>-->
      </div>
    </div>
<!--    <div class="dashboard">-->
<!--      <div class="dsh-row">-->
<!--        <CardCustom title="Fabrice" price="$22.3k" desc="We're the best"/>-->
<!--        <CardCustom title="Fabrice" price="$22.3k" desc="We're the best"/>-->
<!--        <CardCustom title="Fabrice" price="$22.3k" desc="We're the best"/>-->
<!--      </div>-->
<!--      <div class="dsh-row">-->
<!--        <CardCustom title="Fabrice" price="$22.3k" desc="We're the best"/>-->
<!--        <CardCustom title="Fabrice" price="$22.3k" desc="We're the best"/>-->
<!--        <CardCustom title="Fabrice" price="$22.3k" desc="We're the best"/>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
import BtnCustom from "@/custom-elements/BtnCustom";
// import CardCustom from "@/custom-elements/CardCustom";

export default {
  name: "HomePage",
  components: {
    BtnCustom,
    // CardCustom,
  }
}
</script>

<style scoped>

.home-container{
  display: flex;
  flex-direction: row;
}

.sidebar {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
  background-color: #151012;
  width: 300px;
}

.dashboard {
  display: flex;
  flex-direction: column;
}

.user-info {
  display: flex;
  flex-direction: column;
  margin: 0 auto 80px;
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
  flex-direction: row;
}

.dsh-row{
  display: flex;
  flex-direction: row;
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
  color: white;
}


</style>