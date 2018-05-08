<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <div class="iconfont back-icon">&#xe624;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            景点详情
            <router-link to='/'>
                <div class="iconfont header-icon">&#xe624;</div>
            </router-link>
        </div>

    </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
      return {
          showAbs: true,
          opacityStyle: {
              opacity: 0
          }
      }
  },
  methods: {
      handleScroll () {
          const top = document.documentElement.scrollTop
          if (top > 60) {
              let opacity = top / 140
              opacity = opacity > 1 ? 1 : opacity 
              this.opacityStyle = {
                  opacity: opacity
              }
              this.showAbs = false
          } else {
              this.showAbs = true
          }
      }
  },
  // 使用了keep-alive来持久化连接后，activated就代替了mounted
  activated () {
      window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
      window.removeEventListener('scroll', this.handleScroll)      
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.header-abs 
    position: absolute 
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    border-radius: .4rem
    text-align: center
    background: rgba(0, 0, 0, .8)
    .back-icon 
        color: #fff
        font-size: .4rem
.header-fixed
    z-index: 2
    position: fixed
    top: 0
    left: 0
    right: 0
    height: .86rem        
    line-height: .86rem 
    font-size: .32rem
    text-align: center 
    color: #fff
    background: $bgColor
    .header-icon
        position: absolute
        top: 0
        left: 0
        width: .64rem
        text-align: center
        font-size: .4rem
        color: #fff
</style>