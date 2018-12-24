<template>
  <div id="Main">
    <keep-alive>
      <router-view class="router-view" v-if="$route.meta.keepAlive"/>
    </keep-alive>


    <keep-alive>
      <router-view class="router-view" v-if="!$route.meta.keepAlive"/>
    </keep-alive>

    <tabbar @on-index-change="tabbarDidSelecte" v-show="isShowTabbar">

      <tabbar-item>
        <span slot="label">外卖</span>
      </tabbar-item>

      <tabbar-item>
        <span slot="label">搜索</span>
      </tabbar-item>

      <tabbar-item>
        <span slot="label">订单</span>
      </tabbar-item>

      <tabbar-item>
        <span slot="label">我的</span>
      </tabbar-item>

    </tabbar>

  </div>
</template>

<script>
  import Tabbar from "../node_modules/vux/src/components/tabbar/tabbar";
  import TabbarItem from "../node_modules/vux/src/components/tabbar/tabbar-item";
  export default {
    components: {
      TabbarItem,
      Tabbar
    },
    name: 'App',
    data(){
      return {
        tabPath0: "/msite",
        tabPath1: "/search/0",
        tabPath2: "/order",
        tabPath3: "/profile",
      }
    },
    methods: {
      tabbarDidSelecte(newIndex, oldIndex){
        this.recordRoute(oldIndex);
        switch (newIndex) {
          case 0: {
            this.$router.replace(this.tabPath0)
          }
            break;
          case 1: {
            this.$router.replace(this.tabPath1)
          }
            break;
          case 2: {
            this.$router.replace(this.tabPath2)
          }
            break;
          case 3: {
            this.$router.replace(this.tabPath3)
          }
            break;
          default: {

          }
        }
        console.log(oldIndex, newIndex)

      },
      recordRoute(oldIndex){
        switch (oldIndex) {
          case 0: {
            this.tabPath0 = this.$route.path;
          }
            break;
          case 1: {
            this.tabPath1 = this.$route.path;
          }
            break;
          case 2: {
            this.tabPath2 = this.$route.path;
          }
            break;
          case 3: {
            this.tabPath3 = this.$route.path;
          }
            break;
          default: {

          }
        }
      },

    },
    computed: {
      isShowTabbar(){
        var homeStr = this.$route.path.match('/home');
        var cityStr = this.$route.path.match('/city');

        return this.$route.path !== '/' && homeStr === null && cityStr === null
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "./style/common";
  /*.router-fade-enter-active,.router-fade-leave-active{*/
  /*transition: opacify .3s;*/
  /*}*/
  /*.router-fade-enter,.router-fade-leave-to{*/
  /*opacity: 0;*/
  /*}*/
  .router-view {
    width: 100%;
    padding-top: 46px;
    padding-bottom: 56px;
  }

  .Main {
    position: relative;
  }

  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
</style>
