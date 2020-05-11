import Vue from 'vue'
import Router from 'vue-router'
import First from '@/components/views/First'
import Second from '@/components/views/Second'


Vue.use(Router)

export default new Router({
  routes: [
    {
          path: '/',
          name: 'First',
          component: First
        },
    {
      path: '/first',
      name: 'First',
      component: First
    },   {
      path: '/second',
      name: 'Second',
      component: Second
    }
  ]
})
