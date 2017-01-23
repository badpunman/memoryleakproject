// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// import {sync} from 'vuex-router-sync'
import Vue from 'vue'
import App from '.\\App'
//import store from './store/store'
import router from '.\\router'

// import ElementUI from '..\\..\\element\\element\\lib'
//import ElementUI from 'element-ui'
//import '../../element/element/lib/theme-default/index.css'
// import 'element-ui\\lib\\theme-default\\index.css';

//sync(store, router);

// Vue.use(ElementUI)

/* eslint-disable no-new */
let app = new Vue({
  // el: '#app',
  // store,  
  router,
  template: `
  <div id="app">
    <h1>Test</h1>
    <button @click="$router.push('/hello')">Hello</button>
    <button @click="$router.push('/')">Home</button>
    <router-view></router-view>
  </div>`,
  // components: { App }
}).$mount('#app')
