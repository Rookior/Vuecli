<template>
  <div class="PageVuex">
    <p>
      计数-应用state: {{count}}
      <hr />
      Mutation使用：
      <button @click="add">Add</button>
      <button @click="addNum">Add10</button>
      <button @click="desNum">Desc10</button>
      <br />
      Action使用：
      <button @click="IncrementAsync">IncrementAsync</button>
      <button @click="DescmentAsync">DescmentAsync</button>
    </p>
    <p>
      <hr />
      列表筛选-应用getters
      {{doneTodosCount}}
      列表查找-为getter传递参数
      {{getTodoByID}}
    </p>
    <p>
      <hr />
      Module使用：当前state:{{this.$store.state.a}}&nbsp;&nbsp;全局state的count:{{this.$store.state.count}}
      <button @click="IncrementModuleA">Action修改当前Module的state</button>
      <br />

    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    count () {
      //state映射可以使用mapState
      return this.$store.state.count
    },
    doneTodosCount () {
      //getter映射可以使用mapGetters
      return this.$store.getters.doneTodos
    },
    getTodoByID () {
      return this.$store.getters.getTodoById(2) 
    }
  },
  methods: {
    add () {
      this.$store.commit('increment')
    },
    addNum () {
      this.$store.commit('incrementNum',{
         amount: 10
      })
    },
    IncrementModuleA (){
      this.$store.dispatch('incrementIfOddOnRootSum')
    },
    desNum () {
      this.$store.commit({
        type: 'descmentNum',
        amount: 10
      })
    },
    IncrementAsync () {
      this.$store.dispatch({
        type: 'incrementAsync',
        amount: 10
      })
    },
    DescmentAsync () {
      this.$store.dispatch({
        type: 'descmentAsync',
        amount: 10
      })
    },
  }
}
</script>

<style scoped>
.PageVuex button{
  margin: 10px;
}
</style>