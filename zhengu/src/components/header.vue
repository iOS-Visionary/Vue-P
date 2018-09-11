<template>
    <div class="header-wrapper">
      <div class="header">
          <div class="headerBox">
            <div class="input-wrapper">
              <span><input type="text" placeholder="请输入股票名称或代码" v-model="query" ref="stockCode"></span>
              <span><button class="diagnosis">诊断</button></span>
              <img src="../common/images/close.png" alt="">
            </div>
          </div>
          <div class="stock">
            <p class="stockTop">
              <span class="stockName">{{dataObj.stockName}}</span>
              <span class="chg" :class="redOrGreenClass">{{Number(dataObj.New).toFixed(2)}}</span>
            </p>
            <p class="stockBottom">
              <span style="float: left" :class="redOrGreenClass">{{dataObj.stockCode}}</span>
              <span style="float: right" :class="redOrGreenClass">{{dataObj.zdf}}</span>
              <span style="float: right" class="chgValue" :class="redOrGreenClass">{{dataObj.zde}}</span>
            </p>
          </div>
          <div class="search-wrapper" v-show="query">

            <scroll ref="scroll" class="result" v-show="stockList.length > 0">
              <div>
                <div class="item">
                  <span>002600</span>
                  <span>领益智造</span>
                  <span><i>深A</i></span>
                  <span><i>LYZZ</i></span>
                </div>
              </div>
            </scroll>
            <no-data class="nodata" v-show="!(stockList.length > 0)"></no-data>
          </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import scroll from '../components/base/scroll.vue'
  import noData from '../components/base/none/none.vue'
  import {appToast, getPageParam, isTimeRange} from '../common/js/utils'
  import {initStockData, queryStock} from '../common/js/api'
  export default{
    data() {
      return {
        defaultStock: getPageParam('stockCode') || '600000',
        dataObj: {},
        query: '',
        stockList: []
      }
    },
    mounted(){
        this.initData();
    },
    components:{
        scroll,
        noData,
    },
    computed:{
      redOrGreenClass() {
        let zde = this.dataObj.New - this.dataObj.LastClose;
        if (zde > 0) {
          return 'turnRed';
        } else if (zde < 0) {
          return 'turnGreen';
        } else {
          return 'turnGrey'
        }
      }
    },
    methods:{
      queryStockData() {
        if (!this.query) {
          return
        }
        let param = {'like': this.query};
        queryStock(param).then(res => {
          this.stockList = res;
        });
      },
      initData(from) {
        let stockCode = from === 1 ? this.$refs.stockCode.value : this.defaultStock;
        if (!stockCode) {
          appToast('请输入股票名称或代码');
          return;
        }
        if (!(/(^\[a-zA-Z]{1,4}$|^\d{6}$)/.test(stockCode))) {
          appToast('请输入正确的股票名称或代码');
          return;
        }
        let stockId = this.getStockId(stockCode);
        let param = {'StockID': stockId};
        initStockData(param).then(res => {
          this.dataObj = res.pkpool[0];
          this.dataObj.stockCode = stockCode;
          //涨跌额
          let zde = this.dataObj.New - this.dataObj.LastClose;
          this.dataObj.zde = zde > 0 ? '+' + zde.toFixed(2) : zde.toFixed(2);
          //涨跌幅
          let zdf = (this.dataObj.New - this.dataObj.LastClose) * 100 / this.dataObj.LastClose;
          this.dataObj.zdf = zdf > 0 ? '+' + zdf.toFixed(2) + '%' : zdf.toFixed(2) + '%';
          this.$emit('refresh', this.dataObj);

          this.query = '';
          this.startTimerRefresh(stockCode);
        });
      },
      getStockId(stockCode) {
        if (stockCode.substr(0, 1) === "6") {
          return Number(stockCode) + 16777216;
        } else {
          return Number(stockCode) + 33554432;
        }
      },
      startTimerRefresh(stockCode) {
        if (this.stockTimer) {
          clearInterval(this.stockTimer)
        }
        if (this.dataObj.stockCode) {
          //定时器刷新股价
          if (!(isTimeRange('09:25', '11:35') || isTimeRange('12:55', '15:05'))) {
            return;
          }
          let stockId = this.getStockId(stockCode);
          let param = {'StockID': stockId};
          this.stockTimer = setInterval(() => {
            initStockData(param).then(res => {
              this.dataObj = res.pkpool[0];
              this.dataObj.stockCode = stockCode;
              //涨跌额
              let zde = this.dataObj.New - this.dataObj.LastClose;
              this.dataObj.zde = zde > 0 ? '+' + zde.toFixed(2) : zde.toFixed(2);
              //涨跌幅
              let zdf = (this.dataObj.New - this.dataObj.LastClose) * 100 / this.dataObj.LastClose;
              this.dataObj.zdf = zdf > 0 ? '+' + zdf.toFixed(2) + '%' : zdf.toFixed(2) + '%';
            });
          }, 8000);
        }
      }
    },
    watch:{
        query(){
          this.queryStockData();
        }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    border-bottom 1px solid #e7e7e7
    .headerBox
      width 90%
      overflow hidden
      margin 0 auto
      .input-wrapper
        position relative
        height: 0.6rem
        margin 0.195rem 0
        span
          float left
          height: 0.6rem
        span:nth-child(1)
          width: 75%
        span:nth-child(2)
          width: 25%
        input
          box-sizing: border-box;
          float: left;
          height: 100%;
          width: 100%;
          color: #a3a3a3;
          font-size: 0.32rem;
          line-height: 0.6rem;
          text-indent: 0.2rem;
          background: #f5f5f5;
          border-top-left-radius: 0.1rem;
          border-bottom-left-radius: 0.1rem;
          border: 0.01rem solid #e7e7e7;
          border-right: none;
          outline: none;
          -webkit-appearance: none;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
        .diagnosis
          float: left;
          height: 100%;
          width: 100%;
          font-size: 0.32rem;
          color: #ffffff;
          background: red;
          border-bottom-right-radius: 0.1rem;
          border-top-right-radius: 0.1rem;
          border: 0 none;
        img
          position absolute
          height: 0.5rem
          right 26%;
          top 0.05rem


    .stock
      width 90%
      margin 0 auto
      .stockTop
        padding-top 0.1rem
        height 0.6rem
        line-height 0.6rem
        .stockName
          font-size 0.34rem
          float left
          color: #333333;
        .chg
          font-size 0.32rem
          float right
      .stockBottom
        height 0.6rem
        font-size 0.32rem
        .chgValue
          padding-right 0.5rem
  .search-wrapper
    position fixed
    top 1.02rem
    bottom:0
    width 100%
    background-color white
    font-size 0.26rem
    border-bottom: 1px solid #e7e7e7;
    .result
      height 100%
      overflow hidden
      .item
        padding 0 8%
        margin 0 auto
        display flex
        align-items center
        height:0.9rem
        border-bottom: 1px solid #e7e7e7;
        span
          flex 1.5
        span:nth-child(3)
          flex 1
          i
            color white
            background #ff5f07
            border-radius 5px
            padding  2px 7px 0 7px
            font-style inherit
        span:nth-child(4)
          flex:1
          i
            font-style inherit
            margin-left 0.3rem
    .nodata
      position fixed
      top 30%
      left: 50%
      transform translateX(-50%)
</style>
