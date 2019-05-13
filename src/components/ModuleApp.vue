<template>
  <div class="ModuleApp">
    <p>
        {{app}}
        {{this.$store.state.user}}
        <button @click="IncrementModule">Action修改绑定Module的state</button>
    </p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
        ...mapState({
            app: state => state.app,
        }),
    },
    methods: {
        ...mapActions({
            IncrementModule: 'app/incrementIfOddOnRootSum' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
        })
    }
}
</script>
