
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
var Vue = require('vue');
Vue.use(require('vue-resource'));

// import InstantSearch from 'vue-instantsearch';
// Vue.use(InstantSearch);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

/**
 * Vue Router
 *
 * @link http://router.vuejs.org/en/installation.html
 */
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// define routes for users
const routes = [
  {
    path: '/',
    name: 'userindex',
    component: require('./components/user/index.vue')
  },
  {
    path: '/create',
    name: 'usercreate',
    component: require('./components/user/create.vue') 
  },
]

const router = new VueRouter({ routes });

const app = new Vue({
  router
}).$mount('#app');