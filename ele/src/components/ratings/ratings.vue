<template>
  <div class="ratings" ref="ratings">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{seller.score}}</h1>
          <span class="title">综合评分</span>
          <span class="rank">高于周边商家{{seller.rankRate}}%</span>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <star :size="36" :score="seller.serviceScore"></star>
            <span class="score">{{seller.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <star :size="36" :score="seller.foodScore"></star>
            <span class="score">{{seller.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <split></split>
      <ratingselect :select-type="selectType"
                    :only-content="onlyContent"
                    :ratings="ratings">
      </ratingselect>
      <div class="rating-wrapper">
        <ul>
          <li v-for="rating in ratings" v-show="needShow(rating.rateType, rating.text)" class="rating-item">
            <div class="avatar">
              <img :src="rating.avatar" width="28" height="28">
            </div>

            <div class="content">
              <h1 class="name">{{rating.username}}</h1>
              <div class="star-wrapper">
                <star  :size="24" :score="rating.score"></star>
                <span class="delivery" v-show="rating.deliveryTime">{{rating.deliveryTime}}分钟送达</span>
              </div>

              <p class="text">{{rating.text}}</p>
              <div class="recommend" v-show="rating.recommend && rating.recommend.length">
                <span class="icon-thumb_up"></span>
                <span class="item" v-for="item in rating.recommend">{{item}}</span>
              </div>
              <div class="time">
                {{rating.rateTime | formatDate}}
              </div>
            </div>

          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import {formatDate} from '../../common/js/date';
  import split from '../split/split.vue'
  import star from '../star/star.vue'
  import ratingselect from '../ratingselect/ratingselect.vue'
  import axios from 'axios'
  import Hub from '../Bus'
  const ALL = 2;
  const ERR_OK = 0;
    export default {
      props: {
        seller: {
          type: Object
        }
      },
      data() {
        return {
          ratings: [],
          selectType: ALL,
          onlyContent: true
        };
      },
      created(){
//        axios.get('http://localhost:8088/ele/api/ratings').then((res) => {
//          res = res.data.ratings
//          this.ratings = res
//          this.$nextTick(() => {
//            this.scroll = new BScroll(this.$refs.ratings, {
//              click: true
//            });
//          });
//        });
        axios.get('/api/ratings').then((res) => {
          res = res.data.data
          this.ratings = res
          this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.ratings, {
              click: true
            });
          });
        });
        Hub.$on('ratingtype.select',this.ratingTypeSelect);
        Hub.$on('content.toggle',this.contentToggle);
      },
      components:{
        split,
        star,
        ratingselect
      },
      methods: {
        needShow(type, text) {
          if (this.onlyContent && !text) {
            return false;
          }
          if (this.selectType === ALL) {
            return true;
          } else {
            return type === this.selectType;
          }
        },
        ratingTypeSelect(type){
          this.selectType = type;
          this.$nextTick(() => {
            this.scroll.refresh();
          });
        },
        contentToggle(onlyContent){
          this.onlyContent = onlyContent;
          this.$nextTick(() => {
            this.scroll.refresh();
          });
        }
      },
      filters:{
        formatDate(time){
          let date = new Date(time);
          return formatDate(date,'yyyy-MM-dd hh:mm');

        }
      },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/index.styl"
  .ratings
    position absolute
    position absolute
    top: 174px
    bottom: 0
    width:100%
    overflow hidden
    .ratings-content
      .overview
        display flex
        padding 18px 0
        .overview-left
          flex 0 0 138px
          width 138px
          padding 6px 0
          display flex
          flex-direction column
          align-items center
          border-right  1px solid rgba(147,153,159,0.1)
          .score
            color rgb(255,153,0)
            font-size 24px
            line-height 28px
            margin-bottom  6px
          .title
            font-size 12px
            color rgb(7,17,27)
            line-height 12px
            margin-bottom 8px
          .rank
            font-size 10px
            color rgb(7,17,27)
            line-height 10px
        .overview-right
          flex 1
          padding: 6px 0 6px 24px
          .score-wrapper
            margin-bottom: 8px
            font-size: 0
            .title
              display inline-block
              font-size 12px
              color rgb(7,17,27)
              line-height 18px
              vertical-align: top
            .star
              display: inline-block
              margin: 0 12px
              vertical-align: top
            .score
              display inline-block
              font-size 12px
              color rgb(255,153,0)
              line-height 18px
              vertical-align: top
          .delivery-wrapper
            font-size 0
            .title
              margin-right 12px
              font-size 12px
              color rgb(7,17,27)
              line-height 18px
            .delivery
              font-size 12px
              color rgb(147,153,159)
              line-height 18px

      .rating-wrapper
        padding 0 18px
        .rating-item
          display flex
          padding 18px 0
          border-1px(rgba(7, 17, 27, 0.1))
          .avatar
            flex 0 0 28px
            margin-right 12px
            img
              border-radius 50%
          .content
            flex 1
            position relative
            .name
              font-size 10px
              color rgb(7,17,27)
              line-height 12px
            .star-wrapper
              margin-top 4px
              font-size 0
              .star
                display inline-block
                margin-right 6px
                vertical-align top
              .delivery
                vertical-align top
                font-size 10px
                color rgb(147,153,159)
                line-height 12px
                font-weight 200
            .text
              margin-top 6px
              font-size 12px
              color rgb(7,17,27)
              line-height 18px
            .recommend
              margin-top 8px
              line-height 16px
              font-size 0
              .icon-thumb_up
                display inline-block
                font-size 12px
                color rgb(0,160,220)
                margin 0 8px 4px 0
                font-size 9px
              .icon-thumb_up
                 color: rgb(0, 160, 220)
              .item
                padding 0 6px
                font-size 9px
                color rgb(147,153,159)
                line-height 16px
                border-radius 1px
                background-color rgb(255,255,255)
                border 1px solid rgba(7,17,27,0.1)
            .time
              position absolute
              top 0
              right 0
              font-size 10px
              color rgb(147,153,159)
              line-height 12px

</style>
