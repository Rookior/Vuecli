<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <TestPage user="wzy" />
    <hr />
    <h1>路由实例</h1>
    <router-link to="/">主页</router-link>&nbsp;&nbsp;
    <router-link to="/about">关于</router-link>
    <router-view></router-view>
    <hr />
    <div>
      <PageVuex />
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TestPage from './components/TestPage.vue'
import PageVuex from './components/PageVuex.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,
    TestPage,
    PageVuex
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
