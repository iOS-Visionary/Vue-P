<template>
  <div>
    <x-header :left-options="leftOptions" style="width:100%;position:absolute;left:0;top:0;z-index:100;" >
      外卖
    </x-header>
    {{geohash}}
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
