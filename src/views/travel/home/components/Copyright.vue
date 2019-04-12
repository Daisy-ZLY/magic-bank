<template>
  <div class="copyright">
    <span class="name">magic</span>
    <span class="desc">京ICP备0000001</span>
  </div>
</template>

<script>
export default {
  name: "HomeCopyright"
};
</script>

<style scoped lang="stylus">
  @import "~style/variable.styl"
.copyright
  color $subheadColor
  text-align center
  font-size $textSize
  padding 20px
  .name
    padding-right 5px
</style>
