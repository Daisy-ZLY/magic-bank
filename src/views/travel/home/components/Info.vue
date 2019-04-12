<template>
  <div class="info border-top">
    <div class="border-right">
      <span class="iconfont icon-gps"></span>
      <span class="info-item">定位失败</span>
    </div>
    <div>
      <span class="iconfont icon-find"></span>
      <span class="info-item">必游榜单</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeInfo"
};
</script>

<style lang="stylus" scoped>
  @import "~style/variable.styl"
.info
  display flex
  text-align center
  line-height 98px
  font-size $fontSize
  background-color $pageColor
  div
    flex 1
    .info-item
      padding-left 5px
</style>
