<template>
  <div>
    <div class="switch1">
      <mt-swipe class="wrapper" :auto="0" :prevent="true" :stopPropagation="true">
        <mt-swipe-item class="item"><img src="https://img13.360buyimg.com/da/jfs/t11278/154/1832631622/199590/782d753/5a0aba2bNaf96b4a4.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item class="item"><img src="https://m.360buyimg.com/mobilecms/s1125x549_jfs/t7810/197/4456770114/124207/5a94ab3b/5a06c371N142d7d6d.jpg!q70.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item class="item"><img src="https://m.360buyimg.com/mobilecms/s1125x549_jfs/t11254/9/1530461681/145747/6b07fa35/5a02d0b9Nb925a633.jpg!q70.jpg" alt=""></mt-swipe-item>
      </mt-swipe>
      <!--<img src="https://img13.360buyimg.com/da/jfs/t11278/154/1832631622/199590/782d753/5a0aba2bNaf96b4a4.jpg" alt="">-->

    </div>
  </div>

</template>

<script type="text/ecmascript-6">
    export default{}
</script>

<style rel="stylesheet/scss" lang="scss">
.switch1{
  height: 0;
  width: 100%;
  position: relative;
  padding-top: 48.8%;
  overflow: hidden;
  .wrapper{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    img{
      width: 100%;
      height: 100%;
    }
  }
}

  /*.switch1{
    height: 0;
    width: 100%;
    position: relative;
    padding-top: 48.8%;
    overflow: hidden;
    img{
      position: absolute;
      top:0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }**/
</style>
