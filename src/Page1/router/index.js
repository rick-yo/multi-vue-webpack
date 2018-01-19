import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/page1/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})