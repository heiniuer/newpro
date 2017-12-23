import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/Login'
import Home from '@/view/Home'
import MemberManage from '@/view/RightInfo/MemberManage'
import MemberInfo from '@/view/RightInfo/MemberInfo'
import Order from '@/view/RightInfo/Order'
import Records from '@/view/RightInfo/Records'
import NotFound from '@/view/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/membermanage',
          name: '会员管理',
          component: MemberManage
        },
        {
          path: '/memberinfo',
          name: '会员信息审核认证',
          component: MemberInfo
        },
        {
          path: '/order',
          name: '订单管理',
          component: Order
        },
        {
          path: '/records',
          name: '发放记录查询',
          component: Records
        }
      ]
    },
    {
      path: '/404',
      name: '404',
      component: NotFound
    },
    {
      path: '*',
      redirect: { path: '/404' }
    }
  ]
})
