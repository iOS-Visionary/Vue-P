
<template>
    <!--<div >-->
      <!--<swiper style="width:100%;margin:0 auto;width: 100%;" :aspect-ratio="177/375" dots-position="center">-->
        <!--<swiper-item class="test">-->
          <!--<grid  :cols="4" :show-lr-borders="false" :show-vertical-dividers="false">-->
            <!--<grid-item label="九宫格" v-for="i in 8" :key="i">-->
              <!--<img slot="icon" src="https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">-->
            <!--</grid-item>-->
          <!--</grid>-->
        <!--</swiper-item>-->

        <!--<swiper-item class="test">-->
          <!--<grid  :cols="4" :show-lr-borders="false" :show-vertical-dividers="false">-->
            <!--<grid-item label="九宫格" v-for="i in 8" :key="i">-->
              <!--<img slot="icon" src="https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">-->
            <!--</grid-item>-->
          <!--</grid>-->
        <!--</swiper-item>-->

      <!--</swiper>-->
    <!--</div>-->
  <div >
    <swiper :loop="true" style="width:100%;margin:0 auto;width: 100%;" :aspect-ratio="177/375" dots-position="center">
      <swiper-item class="test" v-for="n in 3" :key="n">
        <flexbox class="banner" :gutter="0" wrap="wrap">
          <flexbox-item class="banner-item" v-for="n in 8" :span="1/4" :key="n">
            <img src="https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg" alt="">
            <p>美食</p>
          </flexbox-item>
        </flexbox>
      </swiper-item>
    </swiper>

  </div>
</template>

<script type="text/ecmascript-6">
  import { Swiper } from 'vux'
  import SwiperItem from "../../../node_modules/vux/src/components/swiper/swiper-item";
  import Grid from "../../../node_modules/vux/src/components/grid/grid";
  import GridItem from "../../../node_modules/vux/src/components/grid/grid-item";
  import Flexbox from "../../../node_modules/vux/src/components/flexbox/flexbox";
  import FlexboxItem from "../../../node_modules/vux/src/components/flexbox/flexbox-item";
    export default {components: {
      FlexboxItem,
      Flexbox,
      GridItem,
      Grid,
      SwiperItem,
      Swiper}}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">

  .test
    width: 100%;
    height: 100%;
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
</style>
<style>
  .test /deep/ .weui-grid:after{
    border-bottom: none;
  }
</style>

