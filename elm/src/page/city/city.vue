<template>
  <div>
    <x-header :left-options="leftOptions" style="width:100%;position:absolute;left:0;top:0;z-index:100;">
      上海
    </x-header>
    <div @click="toCity">{{cityid}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import XHeader from "../../../node_modules/vux/src/components/x-header/index";
  export default{
    components: {XHeader},
    data(){
      return {
        cityid: ''
      }
    },
    methods: {
        toCity(){
            this.$router.push({path:'/msite',query:{id1:"我是ID1",id2:"我是ID2"}})
        }
    },
    mounted(){
      this.cityid = this.$route.params.cityid;
    },
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
  .vux-header{
    position: sticky!important;
    top: 0px !important;
    z-index: 999 !important;
  }
</style>
