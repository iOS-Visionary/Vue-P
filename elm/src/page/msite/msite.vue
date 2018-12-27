<template>
  <div class="msite">
    <x-header :left-options="leftOptions" style="width:100%;position:absolute;left:0;top:0;z-index:100;">
      外卖
    </x-header>

    <swiper class="swiper" :loop="true" style="width:100%;margin:0 auto;width: 100%;" :aspect-ratio="177/375"
            dots-position="center">
      <swiper-item class="swiperItem" v-for="(item,index) in this.foodTypes" :key="index">
        <flexbox class="banner" :gutter="0" wrap="wrap">
          <flexbox-item class="banner-item" v-for="(foodItem,index) in item" :span="1/4" :key="index">
            <img :src="imgBaseUrl + foodItem.image_url">
            <p>{{foodItem.title}}</p>
          </flexbox-item>
        </flexbox>
      </swiper-item>
    </swiper>

    <div class="switch1">
      <mt-swipe class="wrapper" :auto="0" :prevent="true" :stopPropagation="true">
        <mt-swipe-item class="swiperItem" v-for="(item,index) in this.foodTypes" :key="index">
          <flexbox class="banner" :gutter="0" wrap="wrap">
            <flexbox-item class="banner-item" v-for="(foodItem,index) in item" :span="1/4" :key="index">
              <img :src="imgBaseUrl + foodItem.image_url">
              <p>{{foodItem.title}}</p>
            </flexbox-item>
          </flexbox>
        </mt-swipe-item>
      </mt-swipe>
      <!--<img src="https://img13.360buyimg.com/da/jfs/t11278/154/1832631622/199590/782d753/5a0aba2bNaf96b4a4.jpg" alt="">-->
    </div>

    <div class="shop_list_container">
      <header class="shop_header">
        <svg class="shop_icon">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#shop"></use>
        </svg>
        <span class="shop_header_title">附近商家</span>
      </header>
    </div>

    <group>
      <cell v-for="n in 100">{{n}}</cell>
    </group>
    <div class="demo-list-box" id="demo_list_box">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Cell} from 'vux'
  import {mapState} from 'vuex'
  import Group from "../../../node_modules/vux/src/components/group/index";
  import XHeader from "../../../node_modules/vux/src/components/x-header/index";
  import {msiteAddress, msiteFoodTypes, cityGuess} from '../../../src/service/getData'
  import {Swiper} from 'vux'
  import SwiperItem from "../../../node_modules/vux/src/components/swiper/swiper-item";
  import Grid from "../../../node_modules/vux/src/components/grid/grid";
  import GridItem from "../../../node_modules/vux/src/components/grid/grid-item";
  import Flexbox from "../../../node_modules/vux/src/components/flexbox/flexbox";
  import FlexboxItem from "../../../node_modules/vux/src/components/flexbox/flexbox-item";
  import MtSwipe from "../../../node_modules/mint-ui/packages/swipe/src/swipe";
  import MtSwipeItem from "../../../node_modules/mint-ui/packages/swipe/src/swipe-item";
  export default{
    components: {
      MtSwipeItem,
      MtSwipe,
      XHeader,
      Group,
      Cell,
      FlexboxItem,
      Flexbox,
      GridItem,
      Grid,
      SwiperItem,
      Swiper
    },
    data(){
      return {
        geohash: '',
        foodTypes: [], // 食品分类列表
        imgBaseUrl: 'https://fuss10.elemecdn.com', //图片域名地址
      }
    },
    mounted(){
//       this.geohash = this.$route.query.id1
      this.geohash = "31.25814,121.50208"
      msiteFoodTypes(this.geohash).then(res => {
        let resLength = res.length;
        let resArr = [...res]; // 返回一个新的数组
        let foodArr = [];
        for (let i = 0, j = 0; i < resLength; i += 8, j++) {
          foodArr[j] = resArr.splice(0, 8);
        }
        console.log(foodArr)
        this.foodTypes = foodArr;
      })
    },
    computed: {
      leftOptions () {
        return {
          showBack: this.$route.path !== '/msite'
        }
      },
      ...mapState({
        demoTop: state => state.vux.demoScrollTop
      })
    },
    activated () {
      document.querySelector('#demo_list_box').scrollTop = this.demoTop
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .swiper
    border-bottom 1px solid #e4e4e4

  .swiperItem
    width: 100%;
    height: 100%;
    background-color white
    .banner
      width: 100%;
      height: 100%;
      .banner-item
        height: 50%;
        img
          display block
          width 30px
          height 30px
          margin 3px auto
        p
          text-align center
          font-size 12px
          margin-top 8px
</style>
<style>
  .test /deep/ .weui-grid:after {
    border-bottom: none;
  }
  .mint-swipe-indicator.is-active {
    background-color: #00a6ff;
  }
</style>
<style rel="stylesheet/scss" lang="scss">
  .switch1 {
    height: 0;
    width: 100%;
    position: relative;
    padding-top: 47.2%;
    overflow: hidden;
    .wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

    }
  }
</style>


<style lang="less" scoped>

  .demo-list-box {
    margin-bottom: 10px;
    background-color: #fff;
    width: 100%;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
  }

  .vux-header {
    position: sticky !important;
    top: 0px !important;
    z-index: 999 !important;
  }

  .shop_list_container {
    margin-top: 15px;
    border-top: 1px solid #e4e4e4;
    background-color: white;
    .shop_header {
      .shop_icon {
        fill: #999;
        margin-left: 15px;
        vertical-align: middle;
        width: 15px;
        height: 15px;
      }
      .shop_header_title {
        color: #999;
      }
    }
  }
</style>

