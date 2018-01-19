<template>
  <div id="app">
    <Navbar></Navbar>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
  import Navbar from '../common/Navbar'
  export default {
    name: 'App',
    components: {
      Navbar
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
