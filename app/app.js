import Vue from "nativescript-vue";
import store from './store.js';

import index from "./pages/index.vue";
import lessons from "./pages/lessons.vue";
import walking from "./pages/walking.vue";

new Vue({
  template: `
    <Frame>
      <component :is="path" />
    </Frame>`,
  components: {
    index,
    lessons,
    walking
  },
  store,
  computed: {
    path() {
      const { route } = this.$store.state;
      return route === '/'? 'index' : route;
    }
  }
}).$start();
