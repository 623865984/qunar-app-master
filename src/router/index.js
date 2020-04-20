import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: () => import('@/pages/home/Home')
  }, {
    path: '/city/in',
    name: 'CityIn',
    component: () => import('@/pages/city/in/City')
  }, {
    path: '/city/out',
    name: 'CityOut',
    component: () => import('@/pages/city/out/City')
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('@/pages/detail/Detail')
  }, {
    path: '/group/',
    name: 'Group',
    component: () => import('@/pages/group/Group')
  },{
    path: '/order/',
    name: 'Order',
    component: () => import('@/pages/order/Order')
  },{
    path: '/user/',
    name: 'User',
    component: () => import('@/pages/user/User')
  },{
    path: '/user/info',
    name: 'Info',
    component: () => import('@/pages/user/Info')
  },{
    path: '/user/userName',
    name: 'UserName',
    component: () => import('@/pages/user/UserName')
  },{
    path: '/user/forget',
    name: 'Forget',
    component: () => import('@/pages/user/Forget')
  },{
    path: '/discover/',
    name: 'Discover',
    component: () => import('@/pages/discover/Discover')
  },{
    path: '/hotel/',
    name: 'Hotel',
    component: () => import('@/pages/hotel/Hotel')
  },{
    path: '/hotel/hotelDetail',
    name: 'HotelDetail',
    component: () => import('@/pages/hotel/HotelDetail')
  },{
    path: '/hotel/hotelInfo',
    name: 'HotelInfo',
    component: () => import('@/pages/hotel/HotelInfo')
  },{
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login')
  }],
  // 打开新页面从顶部开始显示
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
