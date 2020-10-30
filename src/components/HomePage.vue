<template>
  <div class="home-container">
    <SideBar/>
    <router-view></router-view>
  </div>
</template>

<script>

import SideBar from "@/components/SideBar";
export default {
  name: "HomePage",
  components: {
    SideBar
  },
  methods: {
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>

.home-container{
  display: flex;
  width: 100%;
}

</style>