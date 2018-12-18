import Vue from 'vue'
import Router from 'vue-router'
import elementUI from '../components/elementUI/elementUI1.vue'
import vueX from '../components/vueX/vueX1.vue'
import vuex2 from '../components/vueX/vux2.vue'
import vuex3 from '../components/vueX/vux3.vue'
import vuex4 from '../components/vueX/vux4.vue'
import iView from '../components/iView/iView1.vue'
import other from '../components/other/other1.vue'
import toast from '../components/elementUI/pages/toast.vue'
import header from '../components/elementUI/pages/header.vue'
import switch1 from '../components/elementUI/pages/switch.vue'


Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/vueX',
      name: 'vueX',
      component: vuex2
    },
    {
      path: '/vueX/vuex3',
      name: 'vuex3',
      component: vuex3
    },
    {
      path: '/vueX/vuex4',
      name: 'vuex4',
      component: vuex4
    },
    {
      path: '/vueX/vuex5',
      name: 'vuex5',
      component: vueX
    },

    {
      path: '/',
      name: 'main',
      component: elementUI
    },
    {
      path: '/elementUI',
      name: 'elementUI',
      component: elementUI
    },
    {
      path: '/elementUI/toast',
      name: 'toast',
      component: toast
    },
    {
      path: '/elementUI/header',
      name: 'header',
      component: header
    },
    {
      path: '/elementUI/switch',
      name: 'switch',
      component: switch1
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
  ]
})
