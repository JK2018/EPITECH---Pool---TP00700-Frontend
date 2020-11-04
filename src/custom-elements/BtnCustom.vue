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

<style scoped>
.btn-view {
  text-decoration: none;
  color: #242323;
  letter-spacing: 1px;
  display: inline-flex;
  margin: 8px;
  cursor: pointer;
  margin: 8px 25%;
}
.btn-icon {
  margin-right: 15px;
}
span {
  font-size: 18px;
}
</style>