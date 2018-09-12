<template>
  <div class="circle" ref="circle"></div>
</template>

<script>
  import echarts from 'echarts';

  export default {
    props: {
      percent: {
        type: Number,
        default: 60
      },
      fontSize: {
        type: Number,
        default: 13
      }
    },
    computed: {
      percentComp() {
        if (this.fontSize === 20) {
          return Math.round(this.percent)
        }
        return this.percent > 100 ? 100 : this.percent;
      }
    },
    watch: {
      percent() {
        this.renderChart();
      }
    },
    mounted() {
      this.renderChart();
    },
    methods: {
      renderChart() {
        let myChart = echarts.init(this.$refs.circle);
        let option = null;
        option = {
          series: [{
            name: '评分',
            type: 'pie',
            radius: ['80%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              color: '#f04838'
            },
            label: {
              normal: {
                position: 'center',
                textStyle: {
                  color: '#f04838',
                  fontSize: this.fontSize
                }
              }
            },
            data: [{
              value: this.percentComp,
              label: {
                normal: {
                  formatter: this.fontSize === 20 ? '{d}分' : '{d}%',
                }
              }
            }, {
              value: 100 - this.percentComp,
              itemStyle: {
                normal: {
                  color: '#cccccc'
                }
              }
            }]
          }]
        };
        this.$nextTick(() => {
          myChart.setOption(option)
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .circle
    height: 1.5rem;
    width: 1.5rem;
    border: 1px solid #cccccc;
    border-radius: 50%;
    margin: 0 auto;
    margin-top: 0.3rem;

</style>
