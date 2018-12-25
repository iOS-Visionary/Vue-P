<template>
  <div style="height:100%;">
    <x-header :left-options="leftOptions" style="width:100%;position:absolute;left:0;top:0;z-index:100;" >
      外卖
    </x-header>
    {{geohash}}
    <h1>原生 svg</h1>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="190">
        <polygon points="100,10 40,180 190,60 10,60 160,180"
                 style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;" />
      </svg>
    </div>
    <h1>svg.vue</h1>
    <div>
      <a href="https://www.jianshu.com/p/3eb8657ffa31">使用技巧</a>
      <svg class="svg">
        <use xlink:href="#fengniao"></use>
      </svg>
    </div>
    <h1>xxx.svg使用</h1>
    <div>
      <img src="../../images/fl.svg" class="fl_back animation_opactiy">
    </div>
    <div>
      <svg slot="icon">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#msite"></use>
      </svg>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import XHeader from "../../../node_modules/vux/src/components/x-header/index";
  export default{
    components: {XHeader},
    data(){
      return {
        geohash: ''
      }
    },
    mounted(){
       this.geohash = this.$route.query.id1
    },
    computed: {
      leftOptions () {
        return {
          showBack: this.$route.path !== '/msite'
        }
      },
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
</style>
<style lang="stylus" rel="stylesheet/stylus">
  .icon-thumb_up, .icon-thumb_down
    margin-right: 4px
    line-height: 16px
    font-size: 12px
  .icon-thumb_up
    color: rgb(0, 160, 220)
</style>
