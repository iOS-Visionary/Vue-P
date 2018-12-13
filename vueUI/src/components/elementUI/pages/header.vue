<template>
    <div class="header">
      <!--<mt-swipe class="wrapper" :auto="0" :prevent="true" :stopPropagation="true">-->
        <!--<mt-swipe-item class="item"><img src="https://img13.360buyimg.com/da/jfs/t11278/154/1832631622/199590/782d753/5a0aba2bNaf96b4a4.jpg" alt=""></mt-swipe-item>-->
        <!--<mt-swipe-item class="item"><img src="https://m.360buyimg.com/mobilecms/s1125x549_jfs/t7810/197/4456770114/124207/5a94ab3b/5a06c371N142d7d6d.jpg!q70.jpg" alt=""></mt-swipe-item>-->
        <!--<mt-swipe-item class="item"><img src="https://m.360buyimg.com/mobilecms/s1125x549_jfs/t11254/9/1530461681/145747/6b07fa35/5a02d0b9Nb925a633.jpg!q70.jpg" alt=""></mt-swipe-item>-->
      <!--</mt-swipe>-->
      <mt-navbar v-model="selected">
        <mt-tab-item id="one">选项一</mt-tab-item>
        <mt-tab-item id="two">选项二</mt-tab-item>
        <mt-tab-item id="three">选项三</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected" swipeable>
        <mt-tab-container-item id="one">
          <mt-cell v-for="n in 5" :key="n">one{{n}}</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="two">
          <mt-cell v-for="n in 5" :key="n">two{{n}}</mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="three">
          <mt-cell v-for="n in 5" :key="n">three{{n}}</mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
</template>

<script type="text/ecmascript-6">
  import MtTabItem from "../../../../node_modules/mint-ui/packages/tab-item/src/tab-item";
  import MtTabContainer from "../../../../node_modules/mint-ui/packages/tab-container/src/tab-container";
  import MtTabContainerItem from "../../../../node_modules/mint-ui/packages/tab-container-item/src/tab-container-item";
  import MtCell from "../../../../node_modules/mint-ui/packages/cell/src/cell";

    export default{
      components: {
        MtCell,
        MtTabContainerItem,
        MtTabContainer,
        MtTabItem

      },
      data(){
          return{
              selected:"one"
          }
      }

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /*.header
    width 100%
    height 200px
    .wrapper
      .item
        img
          width 100%
          height 100%**/





</style>
