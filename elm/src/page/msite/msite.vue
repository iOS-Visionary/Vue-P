<template>
  <div>
    <x-header :left-options="leftOptions" style="width:100%;position:absolute;left:0;top:0;z-index:100;" >
      外卖
    </x-header>
    <div class="demo-list-box" id="demo_list_box">
      <group class="group">
        <cell v-for="n in 100">{{n}}</cell>
      </group>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Cell} from 'vux'
  import { mapState } from 'vuex'
  import Group from "../../../node_modules/vux/src/components/group/index";
  import XHeader from "../../../node_modules/vux/src/components/x-header/index";
  export default{
    components: {
      XHeader,
      Group,
      Cell},
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
      ...mapState({
        demoTop: state => state.vux.demoScrollTop
      })
    },
    activated () {
      document.querySelector('#demo_list_box').scrollTop = this.demoTop
    },

  }
</script>

<style rel="stylesheet/scss" lang="scss">
</style>
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
  .vux-header{
    position: sticky!important;
    top: 0px !important;
    z-index: 999 !important;
  }
  .group{
    position: relative;
    top: -1.17rem;
  }
  /*.weui-cells{*/
    /*margin-top: 0px;*/
  /*}*/
  /*.vux-no-group-title {*/
     /*margin-top: 0.77em!important;*/
   /*}*/

</style>

