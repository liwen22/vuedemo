<template>
  <div class="login_page fillcontain">
    <p>登录界面</p>
    <router-link to="/second">去第二个页面</router-link>
    <router-link to="/manage">去manage页面</router-link>
    <!-- 简单元素 -->
    <transition>
      <div>toggled content</div>
    </transition>

  </div>
</template>

<script>
    export default {
        name: "login",
      data(){
        return {
          showLogin: true,
        }
      },
    }
</script>

<style  scoped>

</style>
