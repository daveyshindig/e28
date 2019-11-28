import Vue from 'vue';
import App from './../App.vue'
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';

import About from './components/pages/About.vue';
import Home from './components/pages/Home.vue';
import Mix from './components/pages/Mix.vue';
import Favorites from './components/pages/Favorites.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/about', component: About, name: 'about' },
  { path: '/mix/:id', component: Mix, name: 'mix', props: true },
  { path: '/favorites', component: Favorites, name: 'favorites' }
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
