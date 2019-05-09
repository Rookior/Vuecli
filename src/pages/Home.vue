<template>
  <div>
    <p>Welcome home</p>
    <hr />
    vuex实现计算：{{count}}
    <button @click="add">add</button>
  </div>
</template>

<script>
 
  export default {
    computed: {
      count () {
        return this.$store.state.count
      }
    },
    components: {
      
    },
    methods: {
      add (){
        this.$store.commit('increment',{
          num: 10
        })
      }
    }
   
  }
</script>