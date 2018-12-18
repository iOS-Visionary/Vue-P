<template>
    <div>
      <flexbox orient="horizontal">
        <flexbox-item>
          <div class="demo1">1</div>
        </flexbox-item>
        <flexbox-item>
          <div class="demo1">1</div>
        </flexbox-item>
      </flexbox>

      <flexbox orient="vertical" style="margin-top: 20px">
        <flexbox-item>
          <div class="demo1">1</div>
        </flexbox-item>
        <flexbox-item>
          <div class="demo1">1</div>
        </flexbox-item>
      </flexbox>

      <flexbox  style="margin-top: 20px" :gutter="0" wrap="wrap">
        <flexbox-item :span="6">
          <div class="demo1">1</div>
        </flexbox-item >
        <flexbox-item :span="4">
          <div class="demo1">1</div>
        </flexbox-item>
        <flexbox-item :span="2">
          <div class="demo1">1</div>
        </flexbox-item>
        <flexbox-item :span="2">
          <div class="demo1">1</div>
        </flexbox-item>
        <flexbox-item :span="2">
          <div class="demo1">1</div>
        </flexbox-item>
        <flexbox-item :span="2">
          <div class="demo1">1</div>
        </flexbox-item>
      </flexbox>
    </div>
</template>

<script type="text/ecmascript-6">
  import Flexbox from "../../../node_modules/vux/src/components/flexbox/flexbox";
  import FlexboxItem from "../../../node_modules/vux/src/components/flexbox/flexbox-item";

  export default {
    components: {
      FlexboxItem,
      Flexbox

    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .demo1{
    background-color: red;
  }
  .demo2{
    background-color: red;
  }
</style>
