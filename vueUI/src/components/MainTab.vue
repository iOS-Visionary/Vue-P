<template>
    <div class="MainTab">
      <router-link class="tab-item" to="/elementUI" tag="div">
        <div>
          <span class="item-icon" ></span>
          <div class="item-text">eleUI</div>

          <!--<img class="item-icon" src="../../static/img/project_normal@3x.png" alt="">-->
        </div>
      </router-link>

      <router-link class="tab-item" to="/vueX" tag="div">
        <div>
          <span class="item-icon" ></span>
          <div class="item-text">vueX</div>

        </div>
      </router-link>

      <router-link class="tab-item" to="/iView" tag="div">
        <div >
          <span class="item-icon"></span>
          <div class="item-text">iView</div>

        </div>
      </router-link>

      <router-link class="tab-item" to="/other" tag="div">
        <div >
          <span class="item-icon"></span>
          <div class="item-text">other</div>
        </div>
      </router-link>

    </div>
</template>

<script type="text/ecmascript-6">
    export default{}
</script>

<style rel="stylesheet/scss" lang="scss">
  .MainTab{
    position: fixed;
    width: 100%;
    height: 49px;
    left: 0;
    bottom: 0;
    border-top: 1px solid #f0f0f0;
    display: flex;
    background-color: white;
    z-index: 10000;
    .tab-item{
      flex:1;
      .item-text{
        text-align: center;
        font-size: 14px;
        margin-top: 4px;
      }
      .item-icon{
        display: block;
        margin: 3px auto;
        width: 20px;
        height: 20px;
        background-size: 20px 20px;
      }
      &.router-link-active{
        .item-text{
          color: green;
        }
      }
    }
    $srcStr:"../../static/img/";
    .tab-item:nth-child(1){
      .item-icon{
        background-image: url($srcStr+"project_normal@3x.png");
      }
      &.router-link-active{
        .item-icon{
          background-image: url($srcStr+"project_selected@3x.png");
        }
      }
    }

    .tab-item:nth-child(2){
      .item-icon{
        background-image: url($srcStr+"task_normal@3x.png");
      }
      &.router-link-active{
        .item-icon{
          background-image: url($srcStr+"task_selected@3x.png");
        }
      }
    }

    .tab-item:nth-child(3){
      .item-icon{
        background-image: url($srcStr+"privatemessage_normal@3x.png");
      }
      &.router-link-active{
        .item-icon{
          background-image: url($srcStr+"privatemessage_selected@3x.png");
        }
      }
    }

    .tab-item:nth-child(4){
      .item-icon{
        background-image: url($srcStr+"tweet_normal@3x.png");
      }
      &.router-link-active{
        .item-icon{
          background-image: url($srcStr+"tweet_selected@3x.png");
        }
      }
    }
  }
</style>
