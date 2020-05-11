
<template>
  <div id="app">
<!--  <img src="./assets/logo.png">-->
    <router-view/>
<!--    <first></first>-->
  </div>
</template>

<script>
  import First from "./components/views/First";

  export default {
    components:{
      First,
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
