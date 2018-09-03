import Vue from 'vue'
import Router from 'vue-router'
import multiple from '../components/multiple.vue'
import capital from '../components/capital.vue'
import institution from '../components/institution.vue'
import finance from '../components/finance.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/multiple'
    },
    {
      path: '/capital',
      component: capital
    },
    {
      path: '/institution',
      component: institution
    },
    {
      path: '/finance',
      component: finance
    },
    {
      path: '/multiple',
      component: multiple
    },
  ]
})
