import Vue from 'vue'
import Router from 'vue-router'
import elementUI from '../components/elementUI/elementUI1.vue'
import vueX from '../components/vueX/vueX1.vue'
import iView from '../components/iView/iView1.vue'
import other from '../components/other/other1.vue'
import toast from '../components/elementUI/pages/toast.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/elementUI',
      name: 'elementUI',
      component: elementUI
    },
    {
      path: '/vueX',
      name: 'vueX',
      component: vueX
    },
    {
      path: '/iView',
      name: 'iView',
      component: iView
    },
    {
      path: '/other',
      name: 'other',
      component: other
    },
    {
      path: '/elementUI/toast',
      name: 'toast',
      component: toast
    },
    {
      path: '/elementUI/header',
      name: 'header',
      component: toast
    },
    {
      path: '/elementUI/switch',
      name: 'switch',
      component: toast
    },
  ]
})
