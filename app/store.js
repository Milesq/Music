import Vue from 'nativescript-vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    route: 'targets',
    music: null
  },
  mutations: {
    push(state, path) {
      state.route = path;
    },
    setTrack(state, path) {
      state.music = `~/audio/${path}`;
    }
  }
});