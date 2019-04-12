<template>
  <div class="wrapper">
    <div class="title">
      <img
        class="title-img"
        src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png"
      />
      <span class="title-hot">本周热门榜单</span>
      <a class="title-all">全部榜单</a>
    </div>
    <ul class="item-list">
      <li class="item" v-for="item of recommendList" :key="item.id">
        <div class="item-tag" v-if="item.tagUrl">
          <img :src="item.tagUrl" :alt="item.name" />
        </div>
        <div class="item-img">
          <img :src="item.imgUrl" :alt="item.name" />
        </div>
        <div class="item-display">
          <div class="item-desc ellipsis">{{ item.name }}</div>
          <div class="item-price ellipsis">
            <em class="price-unit">￥</em>
            <span>{{ item.price }}</span>
            <span class="price-suffix">起</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
      recommendList: [
        {
          id: "001",
          tagUrl:
            "http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1902/80/80d7d3ef350b7fffa3.water.jpg_250x250_7ac68b4a.jpg",
          name: "东部华侨城茶溪谷",
          price: "59.9"
        },
        {
          id: "002",
          tagUrl:
            "http://img1.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1904/de/de517f86e9fd0d87a3.water.png_250x250_bc61af78.png",
          name: "世界之窗",
          price: "85"
        },
        {
          id: "003",
          tagUrl:
            "http://img1.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1702/9b/9b45082b3e38b2fda3.water.jpg_250x250_402a9a7e.jpg",
          name: "锦绣中华民俗村",
          price: "65"
        },
        {
          id: "004",
          tagUrl: "",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/201307/18/f25ac054eec3804dc8d65eac.jpg_250x250_b9ebca61.jpg",
          name: "海洋奇梦馆",
          price: "50"
        },
        {
          id: "005",
          tagUrl: "",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_250x250_b592c33d.jpg",
          name: "深圳野生动物园",
          price: "230"
        },
        {
          id: "006",
          tagUrl: "",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1904/2e/2e98b8141ff5f7e9a3.water.jpg_250x250_5991ebd9.jpg",
          name: "深圳欢乐谷",
          price: "84.9"
        },
        {
          id: "007",
          tagUrl: "",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_250x250_764d6c11.jpg",
          name: "深圳小梅沙海洋世界",
          price: "155"
        },
        {
          id: "008",
          tagUrl: "",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1502/15/15ca1d0eab6bf46c.water.jpg_250x250_c834cd82.jpg",
          name: "东部华侨城大侠谷",
          price: "140"
        },
        {
          id: "009",
          tagUrl: "",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/201301/16/6a16218e8b39640093835fbb.jpg_250x250_cb12e638.jpg",
          name: "深圳深蓝秘境欢乐水秀",
          price: "70"
        },
        {
          id: "010",
          tagUrl: "",
          imgUrl:
            "http://img1.qunarzz.com/sight/p0/1904/e9/e9f8ebf541e657dea3.water.jpg_250x250_40cc082f.jpg",
          name: "东部华侨城",
          price: "59.9"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import "~style/variable.styl"
.wrapper
  margin-top 20px
  background-color $pageColor
  .title
    padding 24px
    font-size $fontSize
    .title-img
      width 30px
      height 30px
      padding-bottom 5px
    .title-hot
      font-size 32px
    .title-all
      float right
      color $fontColor
  .item-list
    padding 0 24px
    overflow-x scroll
    white-space nowrap
    .item:not(:first-child)
      margin-left 12px
    .item
      position relative
      padding-top 5px
      padding-bottom 10px
      display inline-block
      width 200px
      .item-tag
        img
          position absolute
          top 0
          left 0
          z-index 1
          width 84px
          height 40px
      .item-img
        overflow hidden
        width 200px
        height 0
        padding-bottom 100%
        img
          width 200px
          height 200px
      .item-display
        margin-top 12px
        font-size $textSize
        text-align center
      .price-suffix
        color $fontColor
      .item-price
        color $highLightColor
</style>
