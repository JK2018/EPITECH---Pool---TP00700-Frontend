<template>
  <router-link :to=link class="btn-view">
    <i :class=iconName></i>
    <span >{{textName}}</span>
  </router-link>
</template>

<script>
export default {
  name: "BtnCustom",
  props: {
    textName: String,
    iconName: String,
    link: String
  }
}
</script>

<style scoped>
  .btn-view{
    text-decoration: none;
    color: #242323;
    letter-spacing: 1px;
    display: inline-flex;
    margin: 15px;
    cursor: pointer;
  }

  .btn-view i{
    margin-right: 25px;
    font-size: 35px;
  }

  .btn-view span{
    font-size: 23px;
    line-height: 33px;
  }
</style>