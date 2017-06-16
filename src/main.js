import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import Hello from './components/Hello'
import About from './components/About'
import TodoApp from './components/TodoApp'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
{ path: '/', component: Hello},
{ path: '/about', component: About},
{ path: '/todo', component: TodoApp}
]
const router = new VueRouter({
	routes: routes,
	mode: 'history'
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
}).$mount('#app')//mount the router on the app
