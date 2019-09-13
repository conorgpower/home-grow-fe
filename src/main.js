import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vue from 'vue';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';
import App from './App';
import router from './router';

Vue.use(BootstrapVue);
Vue.use(Vuex);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
