<template>
  <div id="app">
    <Login></Login>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Login from "./components/Login";

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style>
body {
  
  background: #E6DADA;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #274046, #E6DADA);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #274046, #E6DADA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}



</style>
