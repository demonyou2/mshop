import Vue from 'vue'
import Router from 'vue-router'
import ShopMall from '@/components/page/shopmall.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShopMall',
      component: ShopMall
    }
  ]
})
