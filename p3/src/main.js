import Vue from 'vue';
import App from './../App.vue'
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';

import About from './components/pages/About.vue';
import Home from './components/pages/Home.vue';
import Mix from './components/pages/Mix.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/', name: 'about', component: About },
  { path: '/', name: 'mix', component: Mix },
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
