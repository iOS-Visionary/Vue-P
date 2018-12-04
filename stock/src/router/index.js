import Vue from 'vue'
import Router from 'vue-router'
import multiple from '../components/multiple.vue'
import capital from '../components/captial.vue'
import institution from '../components/institution.vue'
import finance from '../components/finance.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect : '/multiple'
    },
    {
      path: '/multiple',
      name: 'multiple',
      component: multiple
    },
    {
      path: '/capital',
      name: 'capital',
      component: capital
    },
    {
      path: '/institution',
      name: 'institution',
      component: institution
    },
    {
      path: '/finance',
      name: 'finance',
      component: finance
    }
  ]
})

