<template>
    <div class="tab">
      <router-link tag="div" class="tab-item" to="/multiple">
        <span class="tab-link">综合</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/capital">
        <span class="tab-link">资金</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/institution">
        <span class="tab-link">机构</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/finance">
        <span class="tab-link">服务</span>
      </router-link>

    </div>
</template>

<script type="text/ecmascript-6">
  export default{

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab
    display flex
    line-height 0.68rem
    font-size 0.34rem
    .tab-item
      flex 1
      text-align center
      border 1px solid #f0f0f0
      border-right: 0;
      &.router-link-active
        background red
        color #ffffff

    .tab-item:nth-child(1)
      border-left 0

</style>
