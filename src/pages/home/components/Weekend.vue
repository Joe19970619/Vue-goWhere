<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul class="ul-reset">
        <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
            <div class="item-img-wrap">
                <img :src="item.imgUrl" class="item-img">
            </div>
            <div class="item-info">
                <p class="item-title">{{ item.title }}</p>
                <p class="item-desc">{{ item.desc }}</p>
                <!-- <button class="item-button">查看详情</button> -->
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props: {
    weekendList: Array
  },
  data() {
    return {
     
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.recommend-title 
    line-height: 0.8rem;
    background: #eeeeee;
    text-indent: 0.2rem;
.ul-reset 
    padding: 0;
    margin: 0;
.item  p 
    margin: 0;
    padding: 0;
.item-img-wrap 
    width: 100% 
    height: 0
    padding-bottom: 37.09%
    .item-img 
        width: 100%;
.item-info 
    padding: 0.1rem;
    min-width: 0;
.item-title 
    line-height: 0.54rem;
    font-size: 0.32rem;
    ellipsis();
.item-desc 
    line-height: 0.4rem;
    color: #ccc;
    ellipsis();
    

</style>
