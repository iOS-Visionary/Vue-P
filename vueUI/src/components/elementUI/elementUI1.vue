<template>
  <section class="page-demo">
    <div v-for="group in navs">
      <div class="page-title">{{group.title}}</div>
      <mt-cell v-for="(item,index) in group.list"
               :key="index"
                :to="'/elementUI'+item.path"
                is-link>
        <div slot="title">
          <i :class="['indexicon', 'mintui-search']"></i>
          <span>{{item.name}}</span>
        </div>
      </mt-cell>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  var navs = require('./nav.config.json')
  import MtCell from "../../../node_modules/mint-ui/packages/cell/src/cell";
  export default{
    components: {MtCell},
    data(){
      return {
        navs: []
      }
    },
    created(){
        this.navs = navs
    }

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "../../assets/font/iconfont.css";
  .indexicon{
    font-size: 22px;
    color: #26a2ff;
    display: inline-block;
    width: 30px;
    vertical-align: top;
  }

  .page-demo{
    padding-bottom: 49px;
    .page-title{
      font-size: 20px;
      margin: 20px auto;
      text-align: center;
      display: block;
      line-height: 1;

    }
  }
</style>
