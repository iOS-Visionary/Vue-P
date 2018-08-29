<template>
    <div class="food" v-show="showFlag" ref="food">
      <div class="food-content">
        <div class="image-header">
          <img :src="food.image" >
          <div class="back" @click="hide">
            <i class="icon-arrow_lift"></i>
          </div>
        </div>
        <div class="content">
          <h1 class="title">{{food.name}}</h1>
          <div class="detail">
            <span class="sell-count">月售{{food.sellCount}}份</span>
            <span class="rating">好评率{{food.rating}}%</span>
          </div>
          <div class="price">
            <span class="now">￥{{food.price}}</span>
            <span class="old">￥{{food.oldPrice}}</span>
          </div>
          <div class="cartcontrol-wrapper">
            <cartcontrol :food="food"></cartcontrol>
          </div>
          <div class="buy" @click.stop.prevent="addFirst" v-show="!food.count || food.count === 0">假如购物车</div>
        </div>
        <split></split>
        <div class="info">
          <h1 class="title">商品介绍</h1>
          <span class="text">{{food.info}}</span>
        </div>
        <split></split>
        <div class="rating">
          <h1 class="title">商品评价</h1>
          <div class="neirong"></div>
          <div class="rating-wrapper">
            <ul>
              <li class="rating-item" v-for="rating in food.ratings">
                <div class="user">
                  <span class="name">{{rating.username}}</span>
                  <img class="avatar" :src="rating.avatar" width="12" height="12"></img>
                </div>
                <div class="time">{{rating.rateTime | formatDate}}</div>
                <p class="text">
                  <span class="icon-thumb_up"></span>
                  {{rating.text}}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import {formatDate} from '../../common/js/date'
  import split from '../split/split.vue'
  import cartcontrol from '../cartcontrol/cartcontrol.vue'
  import BScroll from 'better-scroll';
  import Vue from 'vue';

  const ALL = 2;
  export default {
      props:{
          food:{
              type:Object
          }
      },
      data(){
          return {
              showFlag:false,
              selectType:ALL,
              onlyContent:true,
              desc:{
                  all:'全部',
                  positive:'推荐',
                  negative:'吐槽'

              }
          }
      },
      methods:{
          show(){
              this.showFlag = true;
              this.selectType = ALL;
              this.onlyContent = true;
              this.$nextTick(() => {
                if (!this.scroll) {
                  this.scroll = new BScroll(this.$refs.food, {
                    click: true
                  });
                } else {
                  this.scroll.refresh();
                }
              })
          },
          hide(){
              this.showFlag = false;
          }
      },
      filters:{
          formatDate(time){
              let date = new Date(time);
              return formatDate(date,'yyyy-MM-dd hh:mm');

          }
      },
      components:{
          split,
          cartcontrol,
          BScroll,
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/index.styl"
  .food
    position fixed
    top: 0
    left 0
    bottom 48px
    width: 100%
    background-color #fff
    .image-header
      position relative
      width: 100%
      height: 0
      padding-top 100%
      img
        position absolute
        width: 100%
        height: 100%
        top 0
        left 0
      .back
        position: absolute
        top: 10px
        left: 0
        .icon-arrow_lift
          display: block
          padding: 10px
          font-size: 20px
          color: #fff
    .content
      position relative
      padding: 18px
      .title
        line-height: 14px
        margin-bottom 8px
        font-size: 14px
        font-weight: 700
        color: rgb(7, 17, 27)
      .detail
        margin-bottom: 18px
        line-height: 10px
        height: 10px
        font-size: 0
        .sell-count, .rating
          font-size: 10px
          color: rgb(147, 153, 159)
        .sell-count
          margin-right: 12px
      .price
        font-weight: 700
        line-height: 24px
        .now
          margin-right: 8px
          font-size: 14px
          color: rgb(240, 20, 20)
        .old
          text-decoration: line-through
          font-size: 10px
          color: rgb(147, 153, 159)
      .cartcontrol-wrapper
        position: absolute
        right: 12px
        bottom: 12px
    .info
      padding 18px
      .title
        line-height: 14px
        margin-bottom: 6px
        font-size: 14px
        color: rgb(7, 17, 27)
      .text
        line-height: 24px
        padding: 0 8px
        font-size: 12px
        color: rgb(77, 85, 93)
    .rating
      padding-top 18px
      .title
        line-height: 14px
        margin-left: 18px
        font-size: 14px
        color: rgb(7, 17, 27)
      .rating-wrapper
        padding: 0 18px
        .rating-item
          position: relative
          padding: 16px 0
          border-1px(rgba(7, 17, 27, 0.1))
          .user
            position: absolute
            right: 0
            top: 16px
            line-height: 12px
            font-size: 0
            .name
              display: inline-block
              margin-right: 6px
              vertical-align: top
              font-size: 10px
              color: rgb(147, 153, 159)
            .avatar
              border-radius: 50%
          .time
            margin-bottom: 6px
            line-height: 12px
            font-size: 10px
            color: rgb(147, 153, 159)
          .text
            line-height: 16px
            font-size: 12px
            color: rgb(7, 17, 27)
            .icon-thumb_up, .icon-thumb_down
              margin-right: 4px
              line-height: 16px
              font-size: 12px
            .icon-thumb_up
              color: rgb(0, 160, 220)
            .icon-thumb_down
              color: rgb(147, 153, 159)

</style>
