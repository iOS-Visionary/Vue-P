<template>
  <div class="page-loadmore">
    <p class="page-loadmore-desc">{{translate}}</p>
    <div class="loading-background" :style="{ transform: 'scale3d(' + moveTranslate + ',' + moveTranslate + ',1)' }">
      translateScale : {{ moveTranslate }}
    </div>
    <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <mt-loadmore :top-method="loadTop" @translate-change="translateChange" @top-status-change="statusTopChange" ref="loadmore">
        <ul class="page-loadmore-list">
          <li v-for="item in list" class="page-loadmore-listitem">{{ item }}</li>
        </ul>
        <div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
          <span v-show="topStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
        </div>
      </mt-loadmore>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [],
        topStatus: '',
        translate:0,
        wrapperHeight: 0,
        moveTranslate:0,
      };
    },

    methods: {
      statusTopChange(status) {
        this.topStatus = status;
        this.moveTranslate = 1;
        console.log(status);
      },
      translateChange(translate) {
        const temp =+ translate;
        this.translate = temp.toFixed(2);
        this.moveTranslate = (1 + temp/70).toFixed(2)
      },
      loadTop() {
        setTimeout(() => {
          let firstValue = this.list[0];
          for (let i = 1; i <= 10; i++) {
            this.list.unshift(firstValue - i);
          }
          this.$refs.loadmore.onTopLoaded();
        }, 1500);
      }
    },

    created() {
      for (let i = 1; i <= 3; i++) {
        this.list.push(i);
      }
    },
    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    }

  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  .page-loadmore
    width: 100%;
    overflow-x: hidden;
    .page-loadmore-desc
      text-align: center;
      color: #666;
      padding-bottom: 5px;
    .loading-background
      width 100%
      height 50px
      line-height  50px
      text-align center
      transition:.2s linear
      background-color green
    .page-loadmore-wrapper
      margin-top: -1px;
      overflow: scroll;
      .page-loadmore-list

        .page-loadmore-listitem
          height: 50px;
          line-height: 50px;
          border-bottom: solid 1px #eee;
          text-align: center;
  .mint-loadmore-top
    span
      display: inline-block;
      transition: .2s linear;
      vertical-align: middle;
</style>
