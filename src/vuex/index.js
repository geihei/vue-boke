import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: '',
        username: '',
        userId: '',
        currentTime: '',
    },
    getters: {
        
    },
    mutations: {
        login: (state, data) => {
            localStorage.token = data.token
            state.token = data.token
            state.username = data.username
            state.userId = data._id
        },
        logout: (state) => {
            localStorage.token = ''
            state.token = ''
            state.username = ''
            state.userId = ''
            state.currentTime = ''
        }
    },
    actions: {
        
    },
})