import Vue from 'vue'
import VueRouter from 'vue-router/dist/vue-router.js'

Vue.use(VueRouter)

// These components don't work. 
import Home from './App.vue'
import Hello from './components/Hello.vue'

const home = Home;
const hello = Hello;

// The below components work.
import test from './test.js'
const Foo = { template: '<div>foo</div>' }

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', name: 'home', component: Home},     
        {path: '/hello', name: 'hello', component: Hello}  
    ]
})

export default router;