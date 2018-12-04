<template>
    <div class="header">
      <div class="header-wrapper">
        <div class="input-wrapper">
          <input class="sinput" type="text" placeholder="输入股票名称或代码">
          <div class="close-wrapper">
            <img class="close-icon" src="../../static/images/close.png" alt="">
          </div>
        </div>
        <button class="search">诊断</button>
      </div>
      <div class="stock-info">
        <div class="stock-info-header">
          <div class="stock-name">浦发银行</div>
          <div class="stock-price">11.08</div>
        </div>
        <div class="stock-info-footer">
          <div class="stock-code">60000
          </div>
          <div class="stock-in-de-percent">+0.54%</div>
          <div class="stock-in-de">+0.06</div>
        </div>
      </div>
      <div class="line"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{}
</script>

<style rel="stylesheet/scss" lang="scss">
  .header{
    font-size: 0px;
    .header-wrapper{
      margin: 0.1rem;
      display: flex;
      height: 0.6rem;
      .input-wrapper{
        flex: 0.75;
        position: relative;
        .sinput{
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          color: #a3a3a3;
          font-size: 0.32rem;
          line-height: 0.6rem;
          text-indent: 0.2rem;
          background: #f5f5f5;
          border-top-left-radius: 0.1rem;
          border-bottom-left-radius: 0.1rem;
          border: 0.01rem solid #e7e7e7;
        }
        .close-wrapper{
          .close-icon{
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            margin: auto;
            height: 0.5rem;
            width: 0.5rem;
          }
        }

      }
      .search{
        flex:0.25;
        height: 100%;
        font-size: 0.32rem;
        color: #ffffff;
        background: red;
        border-bottom-right-radius: 0.1rem;
        border-top-right-radius: 0.1rem;
        border: 0 none;
      }
    }
    .stock-info{
      margin: 0.1rem;
      .stock-info-header{
        height: 0.6rem;
        font-size: 0.34rem;
        .stock-name{
          float: left;
        }
        .stock-price{
          float: right;
        }
      }
      .stock-info-footer{
        height: 0.6rem;
        font-size: 0.34rem;
        .stock-code{
          float: left;
        }

        .stock-in-de-percent{
          float: right;

        }

        .stock-in-de{
          float: right;
          margin-right: 0.2rem;
        }
      }

    }
  }
</style>
