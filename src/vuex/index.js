import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: '',
        username: '',
        userId: '',
        currentTime: '',
        editArticleData: {},
    },
    getters: {
        
    },
    mutations: {
        login: (state, data) => {
            localStorage.token = data.token
            localStorage.username = data.username
            state.token = data.token
            state.username = data.username
            state.userId = data._id
        },
        logout: (state) => {
            localStorage.token = ''
            localStorage.username = ''
            state.token = ''
            state.username = ''
            state.userId = ''
            state.currentTime = ''
        },
        setToken: (state) => {
            state.token = localStorage.token
            state.username = localStorage.username
        },
        setArticleData: (state, data) => {
            state.editArticleData = data
        }
    },
    actions: {
        
    },
})