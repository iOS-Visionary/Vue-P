<template>
    <div class="lineTitle">
      <div class="redline"></div>
      <div class="text">{{title}}</div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
      props:{
        title:{
          type:String,
          default:"中国移动"
        }
      },
    }
</script>

<style rel="stylesheet/scss" lang="scss">
  .lineTitle{
    height: 0.8rem;
    display: flex;
    align-items: center;
    .redline{
      width: 3px;
      height: 20px;
      background-color: red;
    }
    .text{
      flex: 1;
      font-size: 16px;
      margin-left: 10px;
    }
  }

</style>
