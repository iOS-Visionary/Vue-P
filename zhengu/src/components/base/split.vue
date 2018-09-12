<template>
    <div class="split-wrapper">
      <div class="split"></div>
      <div class="score-header">{{title}}</div>
    </div>
</template>

<script type="text/ecmascript-6">
  import myCircle from './circle.vue'
    export default{
      props:{
          title:{
              type:String,
              default:'好'
          }
      },
      components:{
        myCircle
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .split-wrapper
    border-bottom 1px solid #f0f0f0
    .split
      background: #f5f5f5;
      height: 0.16rem;
      width 100%
    .score-header
      color #666666
      height: 0.7rem;
      line-height: 0.7rem;
      font-size: 0.34rem;
      &::before
        content: '';
        width: 0.05rem;
        height: 0.34rem;
        background: red;
        float left
        margin 0.18rem 1% 0 5%
</style>
