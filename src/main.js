import Vue from 'vue';
import cookies from 'vue-cookies';
import App from '@/App.vue';
import router from '@/router';
import vuetify from '@/plugins/vuetify';
import store from '@/vuex.js';

Vue.config.productionTip = false;
Vue.use(cookies);

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
