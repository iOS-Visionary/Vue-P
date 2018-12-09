import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DayNight from '../components/DayNightModel.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DayNight',
      component: DayNight
    }
  ]
})
