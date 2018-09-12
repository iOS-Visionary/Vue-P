<template>
    <div class="content-wrapper">
      <div class="content">
        <!--综合评分-->
        <split title="综合评分"></split>
        <div class="score">
          <div class="infomation">
            <myCircle ></myCircle>
            <div class="summary">综合评分打败了81.81%的个股，为重点关注级别。</div>
          </div>
        </div>

        <split title="综合评述"></split>
        <div class="summary">
          <div class="summaryBox">
            <div class="summary-title">短期</div>
            <div class="summary-content">近一个月，市场关注度较强，相关新闻2条,有125家机构对该股进行了调研，走势强于大盘，强于行业；短线观望</div>
          </div>
          <div class="summaryBox">
            <div class="summary-title">长期</div>
            <div class="summary-content">近一个月，市场关注度较强，相关新闻2条,有125家机构对该股进行了调研，走势强于大盘，强于行业；短线观望</div>
          </div>
        </div>

        <split title="市场热度"></split>
        <div class="marketHot">
          <div class="content">近3个月，10个机构撰写过该股的研究报告，目标价大于最新价，上涨空间18.71%，1篇调高评级，最新评级增持</div>
          <p class="info"><span class="score">93分</span><span class="rank">行业排名14/156</span></p>
          <div class="hot">
            <span class="hot-square"></span>
            <span class="hot-text">热度</span>
          </div>
          <div id="mainOne" :style="{width:'6.52rem',height:'4.5rem',margintop:'-0.3rem'}"></div>
        </div>
        <split title="行情表现"></split>
        <div class="marketPer">
          <div class="content">近一个月走势强于大盘,活跃度一般,成交量缩小，近一周大单净流入占周成交额-0.56%</div>
          <p class="info"><span class="score">64分</span><span class="rank">行业排名98/156</span></p>
        </div>
        <split title="价值评估"></split>
        <div class="valueAssess">
          <span class="content">在计算机应用中综合价值相对被高估，股价对其增长预期已有一定的反应，后市超预期增长的可持续性值得考量，其中,市净率、市销率、市现率、市盈率等在行业中排名靠后</span>
          <p class="info"><span class="score">64分</span><span class="rank">行业排名98/156</span></p>
        </div>
        <split title="个股股性"></split>
        <div class="stockFeature">

        </div>
        <split></split>
        <div class="huanShou"></div>
        <split></split>
        <div class="pianLi"></div>
        <split></split>
        <div class="zhangTing"></div>
        <split></split>
        <div class="guJiaPaiMing"></div>
      </div>


    </div>
</template>

<script type="text/ecmascript-6">
  import {initMultipleData} from '../common/js/api'
  import split from './base/split.vue'
  import myCircle from './base/circle.vue'
  import echarts from 'echarts';

  export default{
      props:{
        stockCode: {
          type: String,
          default: '600000'
        },
        newPrice: {
          type: Number,
          default: 0
        },
        stockName: {
          type: String,
          default: ''
        }
      },
      created(){
          this.initData();

      },
      components:{
          split,
          myCircle
      },
      methods:{
          initData(){
            if (!this.stockCode) {
              return
            }
            let param = {'stockid': this.stockCode};
            initMultipleData(param).then(res => {
                console.log(res)
              this.dataObj = res;
              this.initChartData();
            })
          },
          initChartData(){
            let xAxisDataSCRD = [];
            let yAxisDataSCRD = [];
            for (let i = 0; i < this.dataObj.zh_scrdData.length; i++) {
              let item = this.dataObj.zh_scrdData[i];
              xAxisDataSCRD.push(item.EndDate);
              yAxisDataSCRD.push(Number(item.Value).toFixed(2));

            }
            this.renderChartSCRD(xAxisDataSCRD, yAxisDataSCRD);
          },
          renderChartSCRD(xAxisDataSCRD, yAxisDataSCRD) {
            let oneChart = echarts.init(document.getElementById('mainOne'));
            let optionOne = null;
            optionOne = {
              tooltip: {
                trigger: 'axis'
              },
              xAxis: {
                type: 'category',
                boundaryGap: false,
                data: xAxisDataSCRD,
                splitLine: {
                  show: true
                }
              },
              yAxis: {
                type: 'value',
              },
              series: [{
                name: '热度',
                data: yAxisDataSCRD,
                type: 'line',
                smooth: true,
                showSymbol: false,
                lineStyle: {
                  color: '#f04838'
                }
              }],
              grid: {
                top: 15,
                left: 0,
                right: 20,
                bottom: 15,
                containLabel: true
              }
            };
            this.$nextTick(() => {
              oneChart.setOption(optionOne)
            })
        },
      }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .content-wrapper
    .content
      .score
        .infomation
          text-align: center;
          font-size: 0.3rem;
          color: #808080;
          margin 0.3rem 0
          .summary
            margin-top 0.3rem
      .summary
        .summaryBox
          width 90%
          margin 0 auto
          border-bottom 1px solid #f0f0f0
          .summary-title
            font-size: 0.34rem;
            color: #333333;
            line-height: 0.45rem;
            padding-top: 0.2rem;
            padding-bottom: 0.1rem;
          .summary-content
            font-size: 0.32rem;
            color: #808080;
            line-height: 0.45rem;
            padding-bottom: 0.15rem;
      .marketHot
        width 90%
        margin 0 auto
        font-size: 0.32rem;
        color: #808080;
        line-height: 0.45rem;
        padding-bottom: 0.15rem;
        padding-top: 0.2rem;
        .info
          background: #fb532c;
          margin-top 0.1rem
          .score
            color white
            font-size: 0.4rem;
            padding: 0 0.3rem 0 0.2rem;
            vertical-align middle
          .rank
            color white
            font-size: 0.3rem;
            vertical-align middle
        .hot
          margin-top 0.1rem
          .hot-square
            display inline-block
            width 0.12rem
            height 0.12rem
            background-color  #f04838
          .hot-text
            vertical-align middle
      .marketPer
        width 90%
        margin 0 auto
        .content
          font-size: 0.32rem;
          color: #808080;
          line-height: 0.45rem;
          padding-bottom: 0.15rem;
          padding-top: 0.2rem;
        .info
          line-height: 0.45rem;
          background: rgb(239, 188, 108);
          margin-top 0.1rem
          padding-bottom: 0.15rem;
          .score
            color white
            font-size: 0.4rem;
            padding: 0 0.3rem 0 0.2rem;
            vertical-align middle
          .rank
            color white
            font-size: 0.3rem;
            vertical-align middle
      .valueAssess
        width 90%
        margin 0 auto
        padding-bottom: 0.15rem;
        padding-top: 0.2rem;
        line-height: 0.45rem;
        .content
          font-size: 0.32rem;
          color: #808080;
        .info
          background: rgb(122, 153, 242);
          margin-top 0.1rem
          padding-bottom: 0.15rem;
          .score
            color white
            font-size: 0.4rem;
            padding: 0 0.3rem 0 0.2rem;
            vertical-align middle
          .rank
            color white
            font-size: 0.3rem;
            vertical-align middle

</style>
