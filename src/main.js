
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper' // 引入swiper插件

import fastClick from 'fastClick' // 解决移动端的300毫秒点击事件延迟问题

import 'styles/normalize.css'
import 'styles/border.css' // 解决移动端1像素边框的问题
import 'styles/iconfont.css' // 字体图标
import 'swiper/dist/css/swiper.css' // 引入swiper的css文件



Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default global options } */) // 使用swiper，可以设置默认参数

fastClick.attach(document.body) // 绑定fastClick


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
