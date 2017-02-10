// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// import {sync} from 'vuex-router-sync'
import Vue from 'vue'

import router from './router'

let app = new Vue({
  router,
  template: `
  <div id="app">
    <h1>Test</h1>
    <button @click="$router.push('/Foo')">Foo</button>
    <button @click="$router.push('/')">Bar</button>
    <button @click="$router.push('/dummy')">Dummy</button>
    <router-view></router-view>
  </div>`,
}).$mount('#app')
