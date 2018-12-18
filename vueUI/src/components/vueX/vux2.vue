<template>
  <div>
    <div class="center">
      <svg style="width:60px;height:60px;" version="1.1" id="图形" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1024px" height="1024px" viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024" xml:space="preserve"><path class="svgpath" data-index="path_0" fill="#35495e" d="M512 816.64 51.2 985.6l460.8-947.2 460.8 947.2L512 816.64 512 816.64zM509.44 207.36 189.44 862.72l317.44-117.76L506.88 207.36 509.44 207.36zM509.44 207.36" /></svg>
    </div>

    <div>
      <div class="page-loadmore-wrapper" ref="wrapper">
        <mt-loadmore :top-method="loadTop" @translate-change="translateChange" @top-status-change="statusTopChange"
                     ref="loadmore">
          <group>
            <swiper :list="demo_list" :aspect-ratio="549.0/1125.0" :loop="true"></swiper>
            <cell title="Live Demo" link="/vueX/vuex3">
              <span class="demo-icon" slot="icon" style="color:#F70968">&#xe633;</span>
            </cell>
            <cell title="Live Demo" link="/vueX/vuex4">
              <span class="demo-icon" slot="icon" style="color:#F70968">&#xe633;</span>
            </cell>
            <cell title="Live Demo" link="/vueX/vuex5">
              <span class="demo-icon" slot="icon" style="color:#F70968">&#xe633;</span>
            </cell>
            <cell title="Github" link="http://github.com/airyland/vux" value="Star me">
              <span class="demo-icon" slot="icon" style="color:#35495e;">&#xe62f;</span>
            </cell>
            <cell v-for="(item,index) in list" :key="index">{{item}}</cell>
          </group>
          <div slot="top" class="mint-loadmore-top">
            <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
            <span v-show="topStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
          </div>
        </mt-loadmore>
      </div>

    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import Group from "../../../node_modules/vux/src/components/group/index";
  import Cell from "../../../node_modules/vux/src/components/cell/index";
  import {Swiper, SwiperItem} from 'vux';

  import {Loadmore} from 'mint-ui';
  import Vue from 'vue'
  Vue.component(Loadmore.name, Loadmore);

  const baseList = [{
    url: 'javascript:',
    img: 'https://img13.360buyimg.com/da/jfs/t11278/154/1832631622/199590/782d753/5a0aba2bNaf96b4a4.jpg',
    title: '送你一朵fua'
  }, {
    url: 'javascript:',
    img: 'https://m.360buyimg.com/mobilecms/s1125x549_jfs/t7810/197/4456770114/124207/5a94ab3b/5a06c371N142d7d6d.jpg!q70.jpg',
    title: '送你一辆车'
  }, {
    url: 'javascript:',
    img: 'https://m.360buyimg.com/mobilecms/s1125x549_jfs/t11254/9/1530461681/145747/6b07fa35/5a02d0b9Nb925a633.jpg!q70.jpg', // 404
    title: '送你一次旅行',
  }]

  export default{
    components: {
      Swiper,
      SwiperItem,
      Cell,
      Group
    },
    data(){
      return {
        demo_list: baseList,
        topStatus: '',
        list: [],
      }
    },
    methods: {
      statusTopChange(status) {
        this.topStatus = status;

      },
      translateChange(translate) {

      },
      loadTop() {
        setTimeout(() => {
          let firstValue = this.list[0];
          for (let i = 1; i <= 10; i++) {
            this.list.unshift(firstValue - i);
          }
          this.$refs.loadmore.onTopLoaded();
        }, 1500);
      }
    },
    created() {
      for (let i = 1; i <= 3; i++) {
        this.list.push(i);
      }
    },

  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .center {
    margin-top: 15px;
    text-align: center;
  }

  .page-loadmore-wrapper {
    margin-top: -1px;
    overflow: scroll;
    .page-loadmore-listitem {
      height: 50px;
      line-height: 50px;
      border-bottom: solid 1px #eee;
      text-align: center;
    }
  }

  .mint-loadmore-top {
    span {
      display: inline-block;
      transition: .2s linear;
      vertical-align: middle;
    }
  }
</style>
