<template>
    <div class="header ">
      <div class="header-wrapper ">
        <div class="search-wrapper ">
          <input type="text" placeholder="请输入股票名称">
          <img src="../common/images/close.png" alt="">
        </div>
        <div class="zhenduan">诊断</div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../common/stylus/base.styl"
  .header
    width 100%
    overflow: hidden;
    .header-wrapper
      margin 0.195rem 5%
      height: 0.6rem
      display flex
      .search-wrapper
        flex 0.75
        background-color blanchedalmond
        position relative
        input
          float left
          box-sizing: border-box;
          color #a3a3a3
          font-size 0.32rem
          line-height:0.6rem
          text-indent: 0.2rem;
          background: #f5f5f5;
          height: 100%
          width: 100%
          outline: none;
          border-top-left-radius: 0.1rem;
          border-bottom-left-radius: 0.1rem;
          border: 0.01rem solid #e7e7e7;
          -webkit-appearance: none;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
        img
          position absolute
          top: 0.05rem;
          right 0
          height: 0.5rem
      .zhenduan
        flex 0.25
        font-size 0.32rem
        line-height 0.6rem
        text-align center
        color: #ffffff;
        background: red;
        border-bottom-right-radius: 0.1rem;
        border-top-right-radius: 0.1rem;
</style>
