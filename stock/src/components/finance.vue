<template>
    <div class="finance">
      <div class="zhibiao">
        <div class="header">
          <line-title title="财务指标"></line-title>
          <div class="more" @click="pop">>>更多</div>
        </div>

        <div class="zb-item">
          <div class="left">
            <div class="top">市盈率</div>
            <div class="bottom">5.41</div>
          </div>
          <div class="right">
            <div class="top">市净率</div>
            <div class="bottom">0.68</div>
          </div>
        </div>
      </div>

    <div class="pop" v-show="this.popshow==true">
      <div class="center" @click="pop">
        <img src="../../static/images/close.png" alt="">
      </div>
    </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import lineTitle from "./base/lineTitle.vue"
    export default{

      data(){
          return {
            popshow:false
          }

      },
      components:{
        lineTitle
      },
      methods:{
          pop(){
          this.popshow = !this.popshow;
          }
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
  .finance{
    .zhibiao{
      .header{
        display: flex;
        height: 0.8rem;
        .lineTitle{
          flex: 1;
        }
        .more{
          flex: 1;
          font-size: 14px;
          line-height: 0.8rem;
          text-align: right;
        }
      }
      .zb-item{
        display: flex;
        font-size: 14px;
        text-align: left;
        .left, .right{
          flex:1;
          border: 1px solid #000000;
          padding-left: 10px;
        }
        .left{
          border-left: none;
          border-right: none;
        }
        .right{
          border-right: none;
        }
      }
    }
    .pop{
      position: fixed;
      z-index: 20;
      background-color: rgba(0,0,0,0.6);
      width: 100%;
      height: 100%;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      .center{
        background-color: red;

      }
    }

  }
</style>
