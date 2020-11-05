<template>
  <router-link :to="link" class="btn-view">
    <i class="btn-icon" :class="iconName"></i>
    <span>{{ textName }}</span>
  </router-link>
</template>

<script>
export default {
  name: "BtnCustom",
  props: {
    textName: String,
    iconName: String,
    link: String,
  },
};
</script>





<style lang="scss" scoped>
$fontCol: #242323;

.btn-view {
  text-decoration: none;
  color: $fontCol;
  letter-spacing: 1px;
  display: inline-flex;
  margin: 8px;
  cursor: pointer;
  margin: 8px 25%;
}
.btn-icon {
  margin-right: 10px;
}
span {
  font-weight: 450;
  font-size: 18px;
}
</style>