<template>
    <div :class="{'DayNight-day':this.flag==false,'DayNight-bight':this.flag==true}">
        <div :class="{'textDay':this.flag==false,'textNight':this.flag==true}">你是谁</div>
        <div class="icon">
          <img :src="{'../assets/logo.png':this.flag==false,'../assets/down.png':this.flag==true}">
        </div>
        <div @click="tog">切换</div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data(){
            return {
                flag:false
            }
        },
        methods:{
            tog(){
                this.flag = !this.flag;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  .DayNight-day
    background-color white
  .DayNight-bight
    background-color black
  .textDay
    color black
  .textNight
    color white

</style>
