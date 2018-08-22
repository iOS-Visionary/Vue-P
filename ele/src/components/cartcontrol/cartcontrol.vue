<template>
    <div class="cartcontrol">
      <div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart($event)">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
      <div class="cart-count">{{food.count}}</div>
      <div class="cart-add icon-add_circle"   @click.stop.prevent="addCart($event)" ></div>

    </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  export default{
      props:{
          food:{
              type:Object
          }
      },
      methods:{
        addCart(event){
            console.log(event.target)
            if(!event._constructed){
              return;
            }
            if(!this.food.count){//不存在
                Vue.set(this.food,'count',1);
            }else {
                this.food.count++;
            }
          },
          decreaseCart(event){
            if(!event._constructed){

            }
            if(this.food.count){//存在
              this.food.count--;
            }

          }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/index.styl"
  .cartcontrol
    font-size 0
    .cart-decrease
      display inline-block
      padding 6px
      //transition: all 0.4s linear
      .inner
        display: inline-block
        line-height: 24px
        font-size: 24px
        color: rgb(0, 160, 220)
    .cart-count
      display inline-block
      vertical-align top
      width 12px
      padding-top 6px
      line-height: 24px
      text-align center
      color: rgb(147, 153, 159)
      font-size 10px
    .cart-add
      display inline-block
      padding 6px
      line-height: 24px
      font-size 24px
      color: rgb(0, 160, 220)
</style>
