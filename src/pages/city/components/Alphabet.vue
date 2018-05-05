<template>
  <ul class="list">
    <li 
        class="item" 
        v-for="item of letters" 
        :key="item" 
        :ref="item"
        @click="handleLetterClick" 
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
    >{{ item }}</li>   
  </ul>
</template>

<script>

export default {
    name: 'CityAlphabet',
    props: {
        cities: Object
    },
    components: {
       
    },
    computed: {
        letters () {
            const letters = []
            for (let i in this.cities) {
                letters.push(i)
            }
            return letters
        }
    },
     data () {
      return {
        // 希望在touchstart执行后再开始执行touchmove中的内容，所以在data中设置一个标识位
        touchStatus: false,
        startY: 0,
        timer: null
      }
    },
    updated () {
        this.startY = this.$refs['A'][0].offsetTop // 性能优化，放在钩子函数中，只在页面更新时执行一次
    },
    methods: {
        handleLetterClick (e) {
            this.$emit('change', e.target.innerText)
        },
        handleTouchStart () {
            //当手指开始触摸屏幕时，状态变为true
            this.touchStatus = true
        },
        handleTouchMove (e) {
            // better-scroll中提供的方法与event对象
            if (this.touchStatus) {
                if (this.timer) {
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() => {
                    const touchY = e.touches[0].clientY - 79 // 要减去header以及搜索框的高度
                    const index = Math.floor((touchY - this.startY) / 20) - 1 // 判断是第几个字母，20像素是每个字母的高度
                    if ( index >= 0 && index < this.letters.length ) {
                        this.$emit('change', this.letters[index])  
                    }
                }, 16)
            }
        },
        handleTouchEnd () {
            // 当手指结束拖动屏幕时，状态变回false
            this.touchStatus = false
        }
    }
    
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
    .list 
        display: flex
        flex-direction: column 
        justify-content: center
        position: absolute 
        top: 1.58rem
        right: 0
        bottom: 0
        width: .4rem
        list-style: none
        .item 
            line-height: .4rem
            text-align: center 
            color: $bgColor
</style>

