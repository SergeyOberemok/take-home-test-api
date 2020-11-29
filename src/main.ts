import Vue from 'vue';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

import '@/assets/scss/_main.scss';
import { highlight } from '@/BL/filters';

Vue.filter('highlight', highlight);

new Vue({
  store,
  render: (h) => h(App)
}).$mount('#app');
