<template>
    <div class="wrapper">
         <swiper :options="swiperOption">
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
  data() {
    return {
      swiperOption: {
          pagination: '.swiper-pagination',
          loop: true,
          autoplay: 5000,
          speed: 800
      },
    
        swiperList: [{
            id: '0001',
            imgUrl: "http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg"
        },{
            id: '0002',
            imgUrl: "http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg"
        }]
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