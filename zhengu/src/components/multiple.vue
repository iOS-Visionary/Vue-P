<template>
    <div>mul</div>
</template>

<script type="text/ecmascript-6">
  import {initMultipleData} from '../common/js/api'
  let param = {'stockid': '600000'};

  export default{
      created(){
        initMultipleData(param).then(res =>{

        })
      }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
