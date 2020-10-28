<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

// import HomePage from "@/components/HomePage";
export default {
  name: 'App',
  components: {
    // HomePage
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
body {
  font-family: 'Roboto';
  background: #334d50;
  background: -webkit-linear-gradient(to right, #cbcaa5, #334d50);
  background: linear-gradient(to right, #cbcaa5, #334d50);

}
</style>
