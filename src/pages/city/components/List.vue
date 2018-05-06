<template>
  <div class="list" ref="wrapper">
      <div>
        <div class="area">
           <div class="title border-topbottom">当前城市</div>
           <div class="button-list">
               <div class="button-wrapper">
                   <div class="button">{{ this.currentCity }}</div>
                </div>
           </div>
       </div>
        <div class="area">
           <div class="title border-topbottom">热门城市</div>
           <div class="button-list">
               <div class="button-wrapper" v-for="item of hotCities" :key="item.id" @click="handleCityClick(item.name)"><!-- 改变 -->
                   <div class="button">{{ item.name }}</div>
                </div>
           </div>
       </div>
       <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
           <div class="title border-topbottom">{{ key }}</div>
           <div class="item-list">
               <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">{{ innerItem.name }}</div>
           </div>
       </div>
       
      </div>  
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState,mapMutations } from 'vuex'
export default {
    name: 'CityList',
    props: {
        cities: Object,
        hotCities: Array,
        letter: String
    },
    computed: {
        ...mapState({
            currentCity: 'city'
        })
    },
    data () {
      return {
        
      }
    },
    methods: {
        handleCityClick (city) {
            // this.$store.commit('changeCity', city)
            this.changeCity(city)
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
    },
    watch: {
        letter() { 
            // watch作用，一旦letter发生了改变，就会执行letter()里面的代码
            if (this.letter) {
                // better-scroll提供的接口
                const element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
                // console.log(this.$refs)
            }
        }
    },
     mounted () {
        this.scroll = new Bscroll(this.$refs.wrapper)
    },
    
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
.border-topbottom
    &:before 
        border-color: #ccc
    &:after 
        border-color: #ccc
.border-bottom
    &:before 
        border-color: #ccc 
.list 
    overflow: hidden
    position: absolute 
    top: 1.58rem
    bottom: 0
    left: 0
    right: 0
    .title 
        line-height: .44rem
        background: #eeeeee
        padding-left: .2rem
        font-size: .26rem
        color: #666
    .button-list
        padding: .1rem .6rem .1rem .1rem
        overflow: hidden
        .button-wrapper 
            float: left 
            width: 33.33% 
            .button 
                text-align: center 
                padding: .1rem 0
                border-radius: .06rem
                margin: .1rem
                border: .02rem solid #ccc
    .item-list
        .item 
            line-height: .76rem
            // color: #666
            padding-left: .2rem



</style>


