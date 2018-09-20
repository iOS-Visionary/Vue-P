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
          <div id="mainTwo" :style="{width:'6.52rem',height:'4.5rem',margintop:'-0.3rem'}"></div>
        </div>
        <split title="价值评估"></split>
        <div class="valueAssess">
          <span class="content">在计算机应用中综合价值相对被高估，股价对其增长预期已有一定的反应，后市超预期增长的可持续性值得考量，其中,市净率、市销率、市现率、市盈率等在行业中排名靠后</span>
          <p class="info"><span class="score">64分</span><span class="rank">行业排名98/156</span></p>
          <div id="mainThree" :style="{width:'6.52rem',height:'4.5rem',margintop:'-0.3rem'}"></div>
        </div>
        <split title="个股股性"></split>
        <div class="stockFeature">
          <p class="title"><span>涨跌周期 </span><span>现位于 </span><span>下跌期</span></p>

          <div class="content-one">
            <div class="down-arrow">
              <img src="../common/images/down.png" alt="">
            </div>
            <div class="content">
              <div class="top">
                <span class="left">已下跌 2天</span>
                <span class="right">跌幅 -1.00%</span>
              </div>
              <div class="bottom">
                <p><span class="left">下跌周期 9.75天</span><span class="right">五日均价10.11元</span></p>
                <p><span class="left">平均跌幅 9.75天</span><span class="right">二日均价10.11元</span></p>
              </div>
            </div>
          </div>

          <div class="content-two">
            <div class="down-up">
              <img src="../common/images/up.png" alt="">
            </div>
            <div class="content">
              <div class="top">
                <span class="left">上涨周期15天</span>
                <span class="right">平均跌幅跌幅 -1.00%</span>
              </div>
              <div class="bottom">
                <p>已进入下跌周期末端，可适当参与</p>
              </div>
            </div>
          </div>
        </div>
        <split title="换手率"></split>
        <div class="huanShou">
          <div class="circleContent">
            <myCircle></myCircle>
            <span>今日换手率</span>
          </div>
          <div class="circleContent">
            <myCircle></myCircle>
            <span>今日换手率</span>
          </div>
          <div class="circleContent">
            <myCircle></myCircle>
            <span>今日换手率</span>
          </div>
          <div class="circleContent">
            <myCircle></myCircle>
            <span>今日换手率</span>
          </div>
        </div>
        <split title="偏离值"></split>
        <div class="pianLi">
          <div class="top">
            <span >近10日偏离值</span>
            <span style="float: right">1月偏离值</span>
          </div>
          <div class="bottom">
            <span style="float: left">1年内偏离值</span>
          </div>
          <div id="mainFive" :style="{width:'7.1rem',height:'4.5rem',margin:'0 auto'}"></div>
        </div>
        <split title="涨跌停"></split>
        <div class="zhangTing">
          <p class="title">一年内涨停次数为<span>1</span></p>
          <div class="top">
            <span >涨停后2日收益 -7.0%</span>
            <span style="float: right">涨停后5日收益 -7.0%</span>
          </div>
          <div class="bottom">
            <span style="float: left">1年内偏离值</span>
          </div>

          <p class="title">一年内跌停次数为<span>0</span></p>
          <div class="top">
            <span >涨停后2日收益 -7.0%</span>
            <span style="float: right">涨停后5日收益 -7.0%</span>
          </div>
          <div class="bottom">
            <span style="float: left">1年内偏离值</span>
          </div>
          <p>该股不易出现涨停，涨停质量低；不易出现跌停；</p>
        </div>
        <split title="个股股价排名"></split>
        <div class="guJiaPaiMing">
          <p class="info">  <span class="rank">个股股价排名14/156</span><span class="price">股价10.04元</span></p>
          <div class="chartsSix">
            <div id="mainSix" :style="{width:'6.52rem',height:'6rem',margin:'0 auto'}"></div>
            <span>(元)</span>
          </div>
        </div>
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

            //行情表现
            let xAxisDataHQBX = [];
            let yAxisDataHQBX1 = [];
            let yAxisDataHQBX2 = [];
            for (let i = 0; i < this.dataObj.zh_hybxData.length; i++) {
              let item = this.dataObj.zh_hybxData[i];
              xAxisDataHQBX.push(item.TradingDay);
              yAxisDataHQBX1.push(Number(item.GGZDF).toFixed(2));
              yAxisDataHQBX2.push(Number(item.SZZDF).toFixed(2));
            }
            this.renderChartHQBX(xAxisDataHQBX, yAxisDataHQBX1, yAxisDataHQBX2);

            //价值评估
            if (this.dataObj.zh_jzpgData.PEandHyPE) {
              let xAxisDataJZPG = [];
              let yAxisDataJZPG1 = [];
              let yAxisDataJZPG2 = [];
              for (let i = 0; i < this.dataObj.zh_jzpgData.PEandHyPE.length; i++) {
                let item = this.dataObj.zh_jzpgData.PEandHyPE[i];
                xAxisDataJZPG.push(item.year);
                yAxisDataJZPG1.push(Number(item.PEls).toFixed(2));
                yAxisDataJZPG2.push(Number(item.Value).toFixed(2));
              }
              let yMax1 = Math.max.apply(null, yAxisDataJZPG1);
              let yMax2 = Math.max.apply(null, yAxisDataJZPG2);
              // yMax1 = Math.pow(10, yMax1.toFixed(0).toString().length);
              // yMax2 = Math.pow(10, yMax2.toFixed(0).toString().length);
              // 添加预测数据
              xAxisDataJZPG.push(xAxisDataJZPG[xAxisDataJZPG.length - 1] + 1 + "E");
              xAxisDataJZPG.push(Number(xAxisDataJZPG[xAxisDataJZPG.length - 1].substr(0, 4)) + 1 + "E");
              let rcData = this.dataObj.zh_jzpgData.PEandHyPEYc;
              if (rcData) {
                yAxisDataJZPG1.push(rcData.PEFirstYear);
                yAxisDataJZPG1.push(rcData.HYPE);
                yAxisDataJZPG2.push(rcData.PESecondYear);
                yAxisDataJZPG2.push(rcData.HYPEFirstYear);
              }
              this.renderChartJZPG(xAxisDataJZPG, yAxisDataJZPG1, yAxisDataJZPG2);
            }

            //偏离值;
            let xAxisDataPLZ = [];
            let yAxisDataPLZ1 = [];
            let yAxisDataPLZ2 = [];

            for (let i = 0; i < this.dataObj.devData.data.length; i++) {
              let item = this.dataObj.devData.data[i];
              xAxisDataPLZ.push(item.enddate);
              yAxisDataPLZ1.push(Number(item.indexGains).toFixed(2));
              yAxisDataPLZ2.push(Number(item.gains).toFixed(2));
            }
            this.renderChartPLZ(xAxisDataPLZ, yAxisDataPLZ1, yAxisDataPLZ2);


            //个股股价排名
            let yAxisDataGJPM = [];
            let groupList = this.dataObj.rankInfo.rankItem[0].groupList;
            for (let i = 0; i < groupList.length; i++) {
              let item = groupList[i];
              let nextItem = groupList[i + 1];
              if (nextItem) {
                if (this.newPrice >= item.min && this.newPrice < nextItem.min) {
                  yAxisDataGJPM.push({
                    value: item.number,
                    itemStyle: {
                      color: '#f04838'
                    }
                  });
                } else {
                  yAxisDataGJPM.push(item.number)
                }
              } else {
                if (this.newPrice >= item.min) {
                  yAxisDataGJPM.push({
                    value: item.number,
                    itemStyle: {
                      color: '#f04838'
                    }
                  });
                } else {
                  yAxisDataGJPM.push(item.number)
                }
              }
            }
            this.renderChartGJPM(yAxisDataGJPM);
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
        renderChartHQBX(xAxisDataHQBX, yAxisDataHQBX1, yAxisDataHQBX2) {
          let twoChart = echarts.init(document.getElementById('mainTwo'));
          let optionTwo = null;
          optionTwo = {
            tooltip: {
              trigger: 'axis'
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: xAxisDataHQBX,
              splitLine: {
                show: true
              }
            },
            yAxis: {
              type: 'value',
            },
            series: [{
              name: '股价累计涨跌幅',
              data: yAxisDataHQBX1,
              type: 'line',
              smooth: true,
              showSymbol: false,
              lineStyle: {
                color: '#f04838'
              }
            }, {
              name: '上证指数累计涨跌幅',
              data: yAxisDataHQBX2,
              type: 'line',
              smooth: true,
              showSymbol: false,
              lineStyle: {
                color: 'rgb(38, 129, 228)'
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
            twoChart.setOption(optionTwo)
          })
        },
        renderChartJZPG(xAxisDataJZPG, yAxisDataJZPG1, yAxisDataJZPG2) {
          let threeChart = echarts.init(document.getElementById('mainThree'));
          let optionThree = null;
          optionThree = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                crossStyle: {
                  color: '#999'
                }
              }
            },
            xAxis: [{
              type: 'category',
              data: xAxisDataJZPG,
              axisPointer: {
                type: 'shadow'
              }
            }],
            yAxis: [{
              type: 'value',
              // name: '行业市盈率',
              // min: 0,
              // max: yMax1,
            }
              // , {
              //   name: '市盈率',
              //   type: 'value',
              //   // min: 0,
              //   // max: yMax2,
              // }
            ],
            series: [{
              name: '行业市盈率',
              type: 'bar',
              data: yAxisDataJZPG2,
              barWidth: '20%',
              // yAxisIndex: 0,
              itemStyle: {
                color: '#f04838'
              }
            }, {
              name: '市盈率',
              type: 'bar',
              data: yAxisDataJZPG1,
              barWidth: '20%',
              // yAxisIndex: 1,
              itemStyle: {
                color: 'rgb(38, 129, 228)'
              }
            }],
            grid: {
              top: 20,
              left: 10,
              right: 10,
              bottom: 15,
              containLabel: true
            }
          };
          this.$nextTick(() => {
            threeChart.setOption(optionThree)
          })
        },
        renderChartPLZ(xAxisDataPLZ, yAxisDataPLZ1, yAxisDataPLZ2) {
          let fiveChart = echarts.init(document.getElementById('mainFive'));
          let optionFive = null;
          optionFive = {
            tooltip: {
              trigger: 'axis'
            },
            xAxis: {
              type: 'category',
              data: xAxisDataPLZ,
              axisLabel: {
                interval: 100000,
                showMinLabel: true,
                showMaxLabel: true,
              },
            },
            yAxis: {
              type: 'value',
              axisLabel: {
                formatter: '{value}%'
              }
            },
            series: [{
              name: '上证指数',
              data: yAxisDataPLZ1,
              type: 'line',
              smooth: true,
              showSymbol: false,
              lineStyle: {
                color: '#f04838'
              }
            }, {
              name: this.stockName,
              data: yAxisDataPLZ2,
              type: 'line',
              smooth: true,
              showSymbol: false,
              lineStyle: {
                color: 'rgb(38, 129, 228)'
              }
            }],
            grid: {
              top: 15,
              left: 15,
              right: 40,
              bottom: 15,
              containLabel: true
            }
          };
          this.$nextTick(() => {
            fiveChart.setOption(optionFive)
          })
        },
        renderChartGJPM(yAxisDataGJPM) {
          let sixChart = echarts.init(document.getElementById('mainSix'));
          let optionSix = null;
          optionSix = {
            tooltip: {
              trigger: 'axis'
            },
            xAxis: [{
              type: 'category',
              data: ['超低【<5】', '低【5,10】', '中等【10,20】', '中高【20,50】', '高【50,100】', '超高【>100】'],
              axisPointer: {
                type: 'shadow'
              },
              axisLabel: {
                interval: 0,
                rotate: 45,
                margin: 40,
                align: 'center',
              },
            }],
            yAxis: [{
              type: 'value',
              name: '排名',
              // max: yMax1,
            }],
            series: [{
              name: '排名',
              type: 'bar',
              data: yAxisDataGJPM,
              barWidth: '25%',
              itemStyle: {
                color: 'rgb(38, 129, 228)'
              },
              label: {
                normal: {
                  show: true,
                  position: 'top',
                }
              }
            }],
            grid: {
              top: 40,
              left: 0,
              right: 10,
              bottom: 0,
              containLabel: true
            }
          };
          this.$nextTick(() => {
            sixChart.setOption(optionSix)
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
      .stockFeature
        width 90%
        margin 0 auto
        padding-bottom: 0.15rem;
        .title
          font-size: 0.3rem;
          height: 0.6rem;
          line-height: 0.6rem;
          border-bottom: 1px solid #f0f0f0;
          text-indent: 0.2rem;
        .content-one
          font-size 0.32rem
          display flex
          border-bottom 1px solid #f0f0f0
          .down-arrow
            flex 2
            img
              display: block;
              margin: 0.2rem auto;
              width: 0.4rem;
              height: 0.55rem;
          .content
            flex 8
            .top
              border-bottom 1px solid #f0f0f0
              height: 0.95rem;
              line-height: 0.95rem;
              .left
                float left
              .right
                float right
            .bottom
              height: 0.6rem;
              line-height: 0.6rem;
              font-size 0.3rem
              .left
                float left
              .right
                float right
        .content-two
          font-size 0.32rem
          display flex
          border-bottom 1px solid #f0f0f0
          .down-up
            flex 2
            img
              display: block;
              margin: 0.2rem auto;
              width: 0.4rem;
              height: 0.55rem;
          .content
            flex 8
            .top
              border-bottom 1px solid #f0f0f0
              height: 0.95rem;
              line-height: 0.95rem;
              .left
                float left
              .right
                float right
            .bottom
              font-size 0.3rem
              height: 0.6rem;
              line-height: 0.6rem;
      .huanShou
        width 90%
        margin 0 auto
        padding-bottom: 0.15rem;
        display flex
        .circleContent
          font-size 0.20rem
          flex 0 0 1
          span
            display block
            margin 10px auto
            text-align center
      .pianLi
        width 90%
        margin 0 auto
        padding-bottom: 0.15rem;
        overflow hidden
        line-height: 0.6rem;

        .top
          height 0.6rem
          font-size 0.3rem
        .bottom
          border-bottom 1px solid #f0f0f0
          height 0.6rem
          font-size 0.3rem
      .zhangTing
        width 90%
        margin 0 auto
        padding-bottom: 0.15rem;
        overflow hidden
        line-height: 0.6rem;
        font-size 0.3rem
        .title
          font-size: 0.3rem;
          height: 0.6rem;
          line-height: 0.6rem;
          border-bottom: 1px solid #f0f0f0;
        .top
          height 0.6rem
          font-size 0.3rem
        .bottom
          border-bottom 1px solid #f0f0f0
          height 0.6rem
          font-size 0.3rem
      .guJiaPaiMing
        width 90%
        margin 0 auto
        padding-bottom: 0.15rem;
        .info
          background: rgb(242, 131, 122);
          margin-top 0.1rem
          padding-bottom: 0.15rem;
          line-height 0.45rem
          .price
            color white
            font-size: 0.3rem;
            vertical-align middle
          .rank
            color white
            font-size: 0.32rem;
            vertical-align middle
            padding: 0 0.3rem 0 0.2rem;
        .chartsSix
          position: relative;
          font-size: 0.26rem;
          span
            position: absolute;
            right: 0.2rem;
            bottom: 2.1rem;

</style>
