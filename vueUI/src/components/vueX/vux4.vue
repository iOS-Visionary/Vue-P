<template>
  <div>
    <grid :show-vertical-dividers="false" :show-lr-borders="false">
      <grid-item v-for="n in 4" :key="n" @on-item-click="onItemChange">
        <img slot="icon" src="../../../static/img/project_selected@3x.png" alt="">
        <span slot="label">九宫格</span>
      </grid-item>
    </grid>

    <grid :show-vertical-dividers="false" :show-lr-borders="false" :cols="4">
      <grid-item v-for="n in 9" :key="n" @on-item-click="onItemChange">
        <img slot="icon" src="../../../static/img/project_selected@3x.png" alt="">
        <span slot="label">九宫格</span>
      </grid-item>
    </grid>

    <div>
      <tab :line-width=5 activeColor="#fc378c" v-model="selectedIndex">
        <tab-item class="vux-center" v-for="(item, index) in list" :key="index" @on-item-click="segementClick">{{item}}</tab-item>
      </tab>
      <swiper v-model="selectedIndex" height="100px" :show-dots="false">
        <swiper-item v-for="(item, index) in list" :key="index">
          <div class="tab-swiper vux-center">{{item}} Container</div>
        </swiper-item>
      </swiper>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import Grid from "../../../node_modules/vux/src/components/grid/grid";
  import GridItem from "../../../node_modules/vux/src/components/grid/grid-item";
  import Tab from "../../../node_modules/vux/src/components/tab/tab";
  import TabItem from "../../../node_modules/vux/src/components/tab/tab-item";
  import { Swiper,SwiperItem } from 'vux';
  export default{
    components: {
      Swiper,
      SwiperItem,
      TabItem,
      Tab,
      GridItem,
      Grid
    },
    methods: {
      onItemChange(){
        console.log('hahahah')
        var path = this.$route.path;
        console.log(path);
      },
      segementClick(val){
        console.log(val)
        console.log(this.demo2)
      }
    },
    data(){
      return {
        selectedIndex: 0,
        list: ['精选', '美食', '电影', '酒店', '外卖'],
        demo2: '美食',
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .tab-swiper {
    background-color: #fff;
    height: 100px;
  }
</style>
<style lang="less" scoped>
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/center.less';
</style>
