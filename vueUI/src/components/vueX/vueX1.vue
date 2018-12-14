<template>
    <div class="vux-1px-b">
      <button-tab class="wrapper">
        <button-tab-item selected>所有消息</button-tab-item>
        <button-tab-item ><span class="vux-reddot-s">未读消息</span></button-tab-item>
      </button-tab>

      <group>
        <calendar @on-change="onChange" v-model="demo3" title="$t('Disable future')" disable-future></calendar>
      </group>
      <!--一定有v-model-->
      <group>
        <calendar @on-change="onChange" v-model="demo4" title="$t('Show popup header')" show-popup-header popup-header-title="选择日期" disable-future></calendar>
      </group>
    </div>
</template>

<script >
  import { ButtonTab, ButtonTabItem } from 'vux'
  import Group from "../../../node_modules/vux/src/components/group/index";
  import Calendar from "../../../node_modules/vux/src/components/calendar/index";
    export default{
      components: {
        Calendar,
        Group,
        ButtonTab,
        ButtonTabItem
      },
      data () {
        return {
          readonly: false,
          demo1: '',
          demo2: 'TODAY',
          demo3: 'TODAY',
          demo4: 'TODAY',
          demo5: [],
          demo6: [],
          displayFormat (value, type) {
            if (type === 'string') {
              return value
            } else {
              return value.length ? (value.length + ' days') : ''
            }
          }
        }
      },

      methods: {

        onChange (val) {
          console.log('on change', val)
        }
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
</style>
