import Vue from 'vue';
import App from './../App.vue'
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';
import BootstrapVue from 'bootstrap-vue';

import About from './components/pages/About.vue';
import Home from './components/pages/Home.vue';
import Mix from './components/pages/Mix.vue';
import Favorites from './components/pages/Favorites.vue';
import NotFound from './components/pages/NotFound.vue';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

/* eslint-disable no-unused-vars */
const _ = require('lodash')
/* eslint-enable no-unused-vars */

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.config.productionTip = false;

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/about', component: About, name: 'about' },
  { path: '/mix/:id', component: Mix, name: 'mix', props: true },
  { path: '/favorites', component: Favorites, name: 'favorites' },
  // https://router.vuejs.org/guide/essentials/history-mode.html#caveat
  { path: '*', component: NotFound }
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app')
