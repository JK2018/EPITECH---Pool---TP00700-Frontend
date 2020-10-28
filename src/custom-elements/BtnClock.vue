<template>
  <div class="btn-clock"
      :style="{backgroundColor: bckGrnColor, color: txtColor}">
    <i :class=iconName></i>
    <span>{{ textName }}</span>
  </div>
</template>

<script>
export default {
  name: "BtnClock",
  props: {
    iconName: String,
    textName: String,
    bckGrnColor: String,
    txtColor: {type: String, default: "white"},
  },
}
</script>

<style scoped>
  .btn-clock{
    letter-spacing: 1px;
    display: inline-flex;
    padding: 3px;
    cursor: pointer;
    border-radius: 2px;
    width: 162px;
    height: 40px;
    margin: 5px;
    box-shadow: 0 5px 8px 0 rgba(0,0,0,0.2);
  }

  .btn-clock i{
    font-size: 40px;
    margin: 0 10px;
  }

  .btn-clock span{
    font-size: 25px;
    line-height: 40px;
    font-weight: 500;
  }
</style>