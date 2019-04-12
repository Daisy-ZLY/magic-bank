<template>
  <header class="header">
    <div class="header-back iconfont icon-back"></div>
    <div class="header-content iconfont icon-search">
      <span class="search">输入城市/景点/游玩主题</span>
    </div>
    <div class="header-city">
      城市
      <span class="iconfont icon-arrow-down"></span>
    </div>
  </header>
</template>

<script>
export default {
  name: "HomeHeader"
};
</script>

<style lang="stylus" scoped>
  @import "~style/variable.styl"
.header
  display flex
  height 88px
  line-height 88px
  text-align center
  background $themeColor
  color #fff
  .header-back
    float left
    width 40px
    padding 0 20px
  .header-content
    flex 1
    background #fff
    color #e4e7ea
    margin 7px 0
    border-radius 6px
    text-align left
    height 60px
    line-height 60px
    padding 0 5px
    .search
      padding-left 5px
  .header-city
    float right
    width 124px
    font-size $fontSize
</style>
