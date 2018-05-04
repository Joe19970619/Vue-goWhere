<template>
  <div class="search">
      <input type="text" placeholder="输入城市名或拼音" class="search-input">
  </div>
</template>

<script>

export default {
    name: 'CitySearch',
    components: {
       
    },
    data () {
      return {
        
      }
    },
    methods: {
     
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
</style>

