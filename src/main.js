import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Bar from './components/Bar' // component Bar
import Foo from './components/Foo' // component Foo
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/foo', component: Foo }, // path เมื่อเข้า /foo ให้แสดง component Foo
    { path: '/bar', component: Bar } // path เมื่อเข้า /bar ให้แสดง component Bar
  ]
})
new Vue({
  router,
  render: h => h(App) // Start component App.vue
}).$mount('#app')
