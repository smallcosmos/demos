import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        sidebarActive: true,
    },
    mutations: {
        toggleSidebar(state) {
            state.sidebarActive = !state.sidebarActive;
        }
    },
    strict: true
});