
import App from "../App.vue"
const home = r => require.ensure([],() => r(require('../page/home/home.vue')),'home')
const city = r => require.ensure([],() => r(require('../page/city/city.vue')),'city')
const msite = r => require.ensure([],() => r(require('../page/msite/msite.vue')),'msite')
const test = r => require.ensure([],() => r(require('../page/msite/test.vue')),'test')
const order = r => require.ensure([],() => r(require('../page/order/order.vue')),'order')
const profile = r => require.ensure([],() => r(require('../page/profile/profile.vue')),'profile')
const search = r => require.ensure([],() => r(require('../page/search/search.vue')),'search')

export default [{
  path:'/',
  component:App,
  children:[
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component:home
    },
    {
      path:'/city/:cityid',
      component:city
    },
    {
      path:'/msite',
      component:test
    },
    {
      path:'/order',
      component:order
    },
    {
      path:'/search/:geohash',
      component:search
    },
    {
      path:'/profile',
      component:profile
    },

  ]
}]

