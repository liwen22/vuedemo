
<template>
  <div class="first-app">
    {{msg}}
    <p> <router-link to="/first">去第yi个页面</router-link></p>
  </div>
</template>

<script>
  export default {
    name: "second",

    data() {
      return {
        msg:"welcome to 2"
      }
    }
  }
</script>

<style scoped>

</style>
