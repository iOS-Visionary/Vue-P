<template>
    <div class="tab">
      <router-link tag="div" class="tab-item" to="/multiple">
        <div >综合</div>
      </router-link>
      <router-link tag="div" class="tab-item" to="/capital">
        <div >资金</div>
      </router-link >
      <router-link  tag="div" class="tab-item" to="/institution">
        <div >机构</div>
      </router-link>
      <router-link tag="div" class="tab-item" to="/finance">
        <div >财务</div>
      </router-link>


    </div>
</template>

<script type="text/ecmascript-6">
    export default{}
</script>

<style rel="stylesheet/scss" lang="scss">
  .tab{
    display: flex;
    line-height: 0.68rem;
    height: 0.68rem;
    .tab-item{
      flex: 1;
      text-align: center;
      height: 100%;
      font-size: 0.34rem;
      border: 1px solid #f0f0f0;
      border-right: none;
      a{
        text-decoraction: none;
      }
      &.router-link-active{
        background-color: red;
        color: #ffffff;
        border: 1px solid red;
      }
    }
    .tab-item:nth-child(1){
      border-left: none;
    }
  }
</style>
