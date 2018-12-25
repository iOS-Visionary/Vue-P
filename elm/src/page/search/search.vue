<template>
  <div>
    <x-header :left-options="leftOptions" style="width:100%;position:absolute;left:0;top:0;z-index:100;">
      搜索
    </x-header>
  </div>

</template>

<script type="text/ecmascript-6">
  import XHeader from "../../../node_modules/vux/src/components/x-header/index";
  export default{
    components: {
      XHeader
    },
    computed: {
      leftOptions () {
        return {
          showBack: this.$route.path !== '/search/0'
        }
      },
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .vux-header{
    position: sticky!important;
    top: 0px !important;
    z-index: 999 !important;
  }
</style>
