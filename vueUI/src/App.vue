<template>
  <div id="app">
    <!--<main-tab style="display: none"></main-tab>-->

    <x-header :left-options="leftOptions" style="width:100%;position:absolute;left:0;top:0;z-index:100;">
      This is the page title.
    </x-header>
    <router-view class="routerview"/>
    <tabbar class="tabbar-wrapper" @on-index-change="tabbarDidSelecte" link="/elementUI">
      <tabbar-item :selected="true">
        <img slot="icon" src="../static/img/project_normal@3x.png" alt="">
        <img slot="icon-active" src="../static/img/project_selected@3x.png" alt="">
        <span slot="label">elementUI</span>
      </tabbar-item>

      <tabbar-item badge="2" link="/vueX">
        <img slot="icon" src="../static/img/task_normal@3x.png" alt="">
        <img slot="icon-active" src="../static/img/task_selected@3x.png" alt="">
        <span slot="label">vux</span>
      </tabbar-item>
    </tabbar>


  </div>
</template>

<script>
  import mainTab from './components/MainTab.vue'
  import Tabbar from "../node_modules/vux/src/components/tabbar/tabbar";
  import TabbarItem from "../node_modules/vux/src/components/tabbar/tabbar-item";
  import ViewBox from "../node_modules/vux/src/components/view-box/index";
  import XHeader from "../node_modules/vux/src/components/x-header/index";

  export default {
    name: 'App',
    components: {
      XHeader,
      ViewBox,
      TabbarItem,
      Tabbar,
      mainTab
    },
    methods: {
      tabbarDidSelecte(oldIndex, newIndex){
        console.log(oldIndex, newIndex)
      }
    },
    computed:{
      leftOptions () {
        return {
          showBack: this.$route.path !== '/'
        }
      },
    }

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "common/scss/index.scss";
  @import "assets/font/iconfont.css";

  .weui-cells {
    margin-top: 0px !important;
  }
  .routerview{
    width: 100%;
    padding-top: 46px;
    padding-bottom: 56px;

  }
</style>

<style lang="less">
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/reset.less';
  @import '~vux/src/styles/tap.less';

  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
</style>

