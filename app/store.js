import Vue from 'nativescript-vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    route: 'targets'
  },
  mutations: {
    push(state, path) {
      state.route = path;
    }
  }
});