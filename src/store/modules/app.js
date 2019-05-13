const app = {
    namespaced: true,
    state: {
        appState: '初始值appState',
        user: 'wzy'
    },
    mutations: {
        changeAppState(state){
            state.appState = "改变后的appState"
            state.user = "hello world"
        }
    },
    actions: {
        incrementIfOddOnRootSum ({ state, commit, rootState }) {
            alert('调用带命名空间的action');
            commit('changeAppState')
        }
    },
};

export default app;
