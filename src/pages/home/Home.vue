<template>
  <div>
    <!-- 组件在使用的时候要用横杠 -->
    <home-header></home-header> 
  </div>
</template>

<script>

import HomeHeader from './components/Header'
export default {
    name: 'Home',
    components: {
        HomeHeader
    }
}
</script>

<style>

</style>


