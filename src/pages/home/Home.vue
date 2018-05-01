<template>
  <div>
    <!-- 组件在使用的时候要用横杠 -->
    <home-header></home-header> 
    <home-swiper></home-swiper> 
  </div>
</template>

<script>

import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeSwiper
    }
}
</script>

<style>

</style>


