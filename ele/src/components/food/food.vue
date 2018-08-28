<template>
    <div>
      <div class="food-content">
        <div class="image-header"></div>
        <div class="content"></div>
        <div class="line"></div>
        <div class="info"></div>
        <div class="line"></div>
        <div class="rating">
          <h1 class="title">商品评价</h1>
          <div class="neirong"></div>
          <div class="rating-wrapper">
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import {formatDate} from '../../common/js/date'
  const ALL = 2;
  export default {
      props:{
          food:{
              type:Obejct
          }
      },
      data(){
          return {
              showFlag:true,
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
              this,onlyContent = true;
              this.$nextTick(() => {
                if (!this.scroll) {
                  this.scroll = new BScroll(this.$els.food, {
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
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
