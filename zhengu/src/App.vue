<template>
  <div id="app">
    <MyHeader></MyHeader>
    <Tab></Tab>
    <keep-alive>
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>
  import Tab from './components/tab.vue'
  import MyHeader from './components/header.vue'
  export default {
    name: 'App',
    components:{
      Tab,
      MyHeader,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/base.styl"
</style>
