<template>
  <div>
    <x-header :left-options="leftOptions" style="width:100%;position:absolute;left:0;top:0;z-index:100;" >
      外卖
    </x-header>
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

<script>
  /* eslint-disable */
  import XHeader from "../../../node_modules/vux/src/components/x-header/index";


  export default {
    name: 'test',
    components: {
      XHeader
    },

  }
</script>

<style lang="less" scoped>
  .cbox {
    text-align: center;
  }
  .cbox-inner {
    padding: 15px 0;
    width: 100%;
    height: 100%;
  }
  .demo-list-box {
    margin-bottom: 10px;
    background-color: #fff;
    width: 100%;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
  }
</style>
