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





<style lang="scss" scoped>

$fontCol:#242323;

  .btn-view{
    text-decoration: none;
    color: $fontCol;
    letter-spacing: 1px;
    display: inline-flex;
    margin: 5px;
    cursor: pointer;
    
  }

  .btn-view i{
    margin-right: 25px;
    font-size: 30px;
  }

  .btn-view span{
    font-weight: bold;
    line-height: 33px;
    font-size: 16px;
  }
</style>