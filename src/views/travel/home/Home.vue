<template>
  <div class="wrapper-body">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-info></home-info>
    <home-recommend></home-recommend>
    <home-like></home-like>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeInfo from "./components/Info";
import HomeRecommend from "./components/Recommend";
import HomeLike from "./components/Like";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeInfo,
    HomeRecommend,
    HomeLike
  }
};
</script>

<style lang="stylus" scoped>
@import "~style/variable.styl"
.wrapper-body
  background-color $bgColor
</style>
