import Vue from 'vue'
import Router from 'vue-router'
import First from '@/components/views/First'
import Second from '@/components/views/Second'
import Login from '@/page/login'
import manage from '@/page/manage'
import userList from '@/page/userList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'manage',
      component: manage
    },
    {
      path: '/manage',
      name: 'manage',
      component: manage,
      children: [
        {
          path: '',
          component: Second,
          meta: [],
        },
        {
          path: '/first',
          component: First,
          meta: ['编辑', '文本编辑'],
        },
        {
          path: '/second',
          component: Second,
          meta: ['编辑', '文本编辑'],
        },
        {
          path: '/userList',
          component: userList,
          meta: ['数据管理', '用户列表'],
        },
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
