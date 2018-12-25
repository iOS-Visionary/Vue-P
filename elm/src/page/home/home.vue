<template>
    <div >
      <x-header :left-options="leftOptions" style="width:100%;position:absolute;left:0;top:0;z-index:100;">
        无
      </x-header>
      <router-link to="/city/上海">跳转到city</router-link>
      home
    </div>
</template>

<script type="text/ecmascript-6">
  import XHeader from "../../../node_modules/vux/src/components/x-header/index";
    export default{
      components: {XHeader},
      computed: {
        leftOptions () {
          return {
            showBack: false
          }
        },
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
</style>
