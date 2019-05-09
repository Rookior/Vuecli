<template>
  <div>
    <p>
      About page
      <span class="aboutchild">
        <router-link to="/about/profile">关于profile</router-link>&nbsp;&nbsp;
        <router-link to="/about/posts">关于posts</router-link>
      </span>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
 
  export default {
    components: {
      
    }
  }
</script>

<style>
  .aboutchild{
    font-size:10px;
    color:#ccc
  }
</style>