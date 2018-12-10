<template>
  <div id="app">
    <main-tab></main-tab>
    <router-view/>
  </div>
</template>

<script>
  import mainTab from './components/MainTab.vue'

export default {
  name: 'App',
  components:{
      mainTab
  }

}
</script>

<style rel="stylesheet/scss" lang="scss">
@import "common/scss/index.scss";
@import "assets/font/iconfont.css";
</style>

