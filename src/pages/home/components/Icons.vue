<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon"  v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img :src='item.imgUrl' class="icon-imgcontent">
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    };
  },
  computed: {
    pages () {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.icons 
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  overflow: hidden;
  margin-top: .2rem;

  // background: #ccc
  .icon 
    position: relative;
    float: left;
    width: 25%;
    height: 0;
    overflow: hidden;
    padding-bottom: 25%;
    background: #fff;

    .icon-img 
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;

      .icon-imgcontent 
        height: 100%;
        display: block;
        margin: 0 auto;
      
    

    .icon-desc 
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      margin: 0;
      color: $darkTextColor;
      ellipsis()

</style>