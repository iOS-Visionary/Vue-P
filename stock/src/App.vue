<template>
  <div id="app">
    <sHeader></sHeader>
    <s-tab></s-tab>
    <keep-alive>
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>
  import sHeader from './components/header.vue'
  import sTab from './components/tab.vue'
export default {
  name: 'App',
  components:{
    sTab,
    sHeader
  },
}
</script>

<style rel="stylesheet/scss" lang="scss">
@import "common/scss/index";
</style>
