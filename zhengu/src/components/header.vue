<template>
    <div class="header-wrapper">
      <div class="header">
          <div class="headerBox">
            <div class="input-wrapper">
              <span><input type="text" placeholder="请输入股票名称"></span>
              <span><button class="diagnosis">诊断</button></span>
              <img src="../common/images/close.png" alt="">
            </div>
          </div>
      </div>

      <div class="stock">
        <p>
          <span></span>
          <span></span>
        </p>

        <p>
          <span></span>
          <span></span>
          <span></span>
        </p>

      </div>

      <div class="search-wrapper">

      </div>
    </div>
</template>

<script type="text/ecmascript-6">
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    border-bottom 1px solid #e7e7e7
    .headerBox
      width 90%
      overflow hidden
      margin 0 auto
      .input-wrapper
        position relative
        height: 0.6rem
        margin 0.195rem 0
        span
          float left
          height: 0.6rem
        span:nth-child(1)
          width: 75%
        span:nth-child(2)
          width: 25%
        input
          box-sizing: border-box;
          float: left;
          height: 100%;
          width: 100%;
          color: #a3a3a3;
          font-size: 0.32rem;
          line-height: 0.6rem;
          text-indent: 0.2rem;
          background: #f5f5f5;
          border-top-left-radius: 0.1rem;
          border-bottom-left-radius: 0.1rem;
          border: 0.01rem solid #e7e7e7;
          border-right: none;
          outline: none;
          -webkit-appearance: none;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
        .diagnosis
          float: left;
          height: 100%;
          width: 100%;
          font-size: 0.32rem;
          color: #ffffff;
          background: red;
          border-bottom-right-radius: 0.1rem;
          border-top-right-radius: 0.1rem;
          border: 0 none;
        img
          position absolute
          height: 0.5rem
          right 26%;
          top 0.05rem


</style>
