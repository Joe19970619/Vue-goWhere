<template>
    <div>
        <div class="search">
            <input v-model="keyword" type="text" placeholder="输入城市名或拼音" class="search-input">
        </div>
        <div class="search-content" ref="search" v-show="keyword"><!-- 判断有关键词时才显示 -->
            <ul>
                <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">
                    {{ item.name }}
                </li>
                 <li class="search-item border-bottom" v-show="hasNoData"> <!-- 判断没有搜索结果时才显示 -->
                    没有找到匹配数据
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'

export default {
    name: 'CitySearch',
    components: {
       
    },
    props: {
        cities: Object
    },
    data () {
      return {
        keyword: '',
        list: [],
        timer: null
      }
    },
    computed: {
        hasNoData () {
            return !this.list.length
        }
    },
    watch: { 
        // 监听搜索关键字keyword的改变
        // 为提高性能加一个函数节流
        keyword () {
            if (this.timer) {
                clearTimeout(this.timer)
            }
            if (!this.keyword) {
                this.list = []
                return
            }
            this.timer = setTimeout(() => {
                // 逻辑代码在此处
                const result = []
                for (let i in this.cities) {
                    this.cities[i].forEach((value) => {
                        // 如果从spell或者name中能搜索到这个关键字，就把这项添加到result之中
                        if (value.spell.indexOf(this.keyword) > -1 ||
                            value.name.indexOf(this.keyword) > -1) {
                                result.push(value)
                            }
                    });
                }
                this.list = result // 所以此时list中就存储了包含关键字keyword的城市的项目
            }, 100)
        }
        
    },
    methods: {
        handleCityClick (city) {
            this.changeCity(city)            
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
        
    },
    mounted () {
        this.scroll = new Bscroll(this.$refs.search)
    }
    
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
.search 
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    & input 
        padding: 0
        margin: 0
        border: none
    .search-input
        box-sizing: border-box
        width: 100%    
        height: .62rem
        padding: 0 .1rem
        line-height: .62rem
        text-align: center
        border-radius: .06rem
        color: #666
.search-content
    & ul 
        margin: 0
        padding: 0
        list-style: none
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eeeeee
    .search-item
        line-height: .62rem
        padding: .2rem
        background: #fff 

        color: #666
</style>

