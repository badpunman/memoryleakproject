import Vue from 'vue'
import VueRouter from 'vue-router/dist/vue-router.js'

Vue.use(VueRouter)

// import hello from './components/Hello.vue'
const Bar = {
    template: '<input v-model="foo"></input>',
    data() {
        return {
            foo: "bar"
        }
    }
}
const Foo = { 
    template: '<input v-model="foo"></input>',
    data() {
        return {
            foo: "foo"
        }
    },    
}
const Dummy = {
    template: '<div></div>'
}

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {path: '/', name: 'bar', component: Bar},     
        {path: '/Foo', name: 'foo', component: Foo},
        {path: '/dummy', component: Dummy}
    ]
})

export default router;