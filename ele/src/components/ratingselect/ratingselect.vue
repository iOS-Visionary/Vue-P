<template>
    <div>
      <span class="block positive" :class="{'actice':selectType === 2}" @click="select(2,$event)">{{desc.all}}</span>
      <span class="block positive" :class="{'actice':selectType === 0}" @click="select(0,$event)">{{desc.positive}}</span>
      <span class="block positive" :class="{'actice':selectType === 1}" @click="select(1,$event)">{{desc.negative}}</span>
    </div>
</template>

<script type="text/ecmascript-6">
  const POSITIVE = 0;
  const NEGATIVE = 1;
  const ALL = 2;
  export default{
      props:{
          desc:{
              type:Object,

          },
          selectType:{
              type:Number,
              default:ALL
          },
          desc:{
            all: '全部',
            positive: '满意',
            negative: '不满意'
          }
      },
      computed:{
          positives(){
              return this.ratings.filter((rating) => {
                  return rating.rateType === POSITIVE;
              })
          },
          negatives(){
            return this.ratings.filter((rating) => {
              return rating.rateType === NEGATIVE;
            })
          }

      },
      methods:{
          select(type,event){
            if (!event._constructed) {
              return;
            }
            this.selectType = type;
            this.$dispatch('ratingtype.select', type);
          },
          toggleContent(event){

          }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
