import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Case1 from '@/examples/tables/case1/index'
import Case2 from '@/examples/tables/case2/index'
import LayoutCase1 from '@/examples/layout/case1/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/case1',
      name: 'Case1',
      component: Case1
    }, {
      path: '/case2',
      name: 'Case2',
      component: Case2
    },{
      path:'/layoutCase1',
      name: 'LayoutCase1',
      component: LayoutCase1
    }
  ]
})
