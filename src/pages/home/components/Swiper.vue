<template>
    <div class="wrapper">
        <!-- 当swiperList是空数组时，swiper不被创建，只有当数据请求到位时，才创建swiper -->
         <swiper :options="swiperOption" v-if="showSwiper"> 
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
        swiperList: Array
  },
  data() {
    return {
      swiperOption: {
          pagination: '.swiper-pagination',
          loop: true,
          autoplay: 5000,
          speed: 800
      }
    }
  },
  computed: {
      showSwiper () {
          return this.swiperList.length
      }
  }
};
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active 
    background: #fff
.wrapper  // 小技巧：实现宽高比例自适应
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 31.25% // 为什么要写在padding里？是因为直接写在height里，就不是相对于width的宽度了
    background: #ccc // 图片未加载出来的时候有一个灰色背景
    .swiper-img 
        width: 100%
    

</style>