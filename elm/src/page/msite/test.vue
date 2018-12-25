<template>
  <div class="demo-list-box" id="demo_list_box" style="height: 600px">
    <cell v-for="n in 100">{{n}}</cell>
  </div>
</template>

<script>
  /* eslint-disable */
  import { Cell} from 'vux'
  import { mapState } from 'vuex'

  export default {
    name: 'demoList',
    components: {
      Cell,
    },
    activated () {
      document.querySelector('#demo_list_box').scrollTop = this.demoTop
    },
    computed: {
      ...mapState({
        demoTop: state => state.vux.demoScrollTop
      })
    }
  }
</script>

<style lang="less" scoped>
  .cbox {
    text-align: center;
  }
  .cbox-inner {
    padding: 15px 0;
    width: 100%;
    height: 100%;
  }
  .demo-list-box {
    margin-bottom: 10px;
    background-color: #fff;
    width: 100%;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
  }
</style>
