<template>
  <div class="institution">
    <div class="pingji">
      <line-title title="机构评级">

      </line-title>
      <div class="pj-item">
        <div class="pj-name-jg">
          <div class="name">励雅敏/袁喆奇</div>
          <div class="jg">中银国际证券</div>
        </div>
        <div class="pj-date">
          <div class="text">增持</div>
          <div class="date">2018-12-03</div>
        </div>
      </div>
    </div>
    <div class="chicang">
      <line-title title="机构持仓"></line-title>
      <div class="desc">
        <div class="left">
          <div class="desc-text">报告期</div>
          <div class="desc-text">机构数量</div>
        </div>
        <div class="middel">
          <div class="desc-text">累计实质亿元</div>
          <div class="desc-text">持仓比例</div>
        </div>
        <div class="right">
          <div class="desc-text">报告期</div>
          <div class="desc-text">变化万股</div>
        </div>
      </div>
      <div class="cc-item">
        <div class="left">
          <div class="desc-text">2018-09-30</div>
          <div class="desc-text">84</div>
        </div>
        <div class="middel">
          <div class="desc-text">19.72</div>
          <div class="desc-text">0.66%</div>
        </div>
        <div class="right">
          <div class="in-de desc-text">3287483745</div>
        </div>
      </div>
    </div>
    <div class="hangye">
      <line-title title="所属概念&行业"></line-title>
    </div>
    <div class="shangzhang">
      <line-title title="盈利预测"></line-title>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import lineTitle from "./base/lineTitle.vue"
  export default{
    components: {
      lineTitle
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .lineTitle {
    /*margin-left: 0.1rem;*/
  }

  .institution {
    font-size: 0px;
    .pingji {
      margin: 0.2rem;
      .pj-item{
        display: flex;
        font-size: 15px;
        .pj-name-jg{
          flex: 1;
          .name{

          }
          .jg{
            margin-top: 0.2rem;

          }
        }
        .pj-date{
          flex: 1;
          text-align: right;
          .text{

          }
          .date{
            margin-top: 0.2rem;
          }
        }
      }
    }
    .desc-text{
      font-size: 15px;
      text-align: center;
    }
    .chicang{
      font-size: 0px;
      .desc{
        display: flex;
        .left,.middel,.right{
          flex: 1;
        }

      }
      .cc-item{
        display: flex;
        align-items: center;
        .left,.middel,.right{
          flex: 1;
        }
        .right{
          .in-de{
          }
        }
      }
    }
  }
</style>
