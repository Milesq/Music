import Vue from "nativescript-vue";
import store from './store.js';

import index from "./pages/index.vue";
import lessons from "./pages/lessons.vue";
import targets from "./pages/targets.vue";

import { CardView } from 'nativescript-cardview'
Vue.registerElement('CardView', () => CardView);

new Vue({
  template: `
    <Frame>
      <component :is="path" />
    </Frame>`,
  components: {
    index,
    lessons,
    targets
  },
  store,
  computed: {
    path() {
      const { route } = this.$store.state;
      return route === '/'? 'index' : route;
    }
  }
}).$start();
