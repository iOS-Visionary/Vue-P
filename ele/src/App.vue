<template>
  <div>
    <v-header :seller = "seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>

  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/header.vue'
  import axios from 'axios'
export default {
  data(){
    return{
        seller: {}
    };
  },
  created(){


//      axios.get('http://localhost:8088/ele/api/seller').then((res) => {
//        res = res.data.seller
//        this.seller = res
//      })
    axios.get('/api/seller').then((res) => {
      res = res.data.data
      this.seller = res
    })
  },
  components:{
      'v-header': header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

  @import "common/stylus/mixin.styl"
  .tab
    display : flex
    width: 100%
    height: 40px
    line-height :40px
    border-1px(rgba(7,17,21,0.1))
    .tab-item
      flex:1
      text-align :center
      .router-link
        display :block
        font-size :14px
        color: rgb(77, 85, 93)
        .router-link-active
          font-size :14px
          color: rgb(240,20,20)


</style>
