<template>
  <div class="wrapper">
    <div class="icons">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page, index) of this.pages" :key="index">
          <div class="icon" v-for="item of page" :key="item.id">
            <img class="icon-img" :src="item.imgUrl" :onerror="defaultImg" />
            <p class="icon-desc ellipsis">{{ item.desc }}</p>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      iconList: [
        {
          id: "001",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票"
        },
        {
          id: "002",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          desc: "一日游"
        },
        {
          id: "003",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          desc: "深圳必游"
        },
        {
          id: "004",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png",
          desc: "海洋馆"
        },
        {
          id: "005",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
          desc: "动植物园"
        },
        {
          id: "006",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png",
          desc: "踏青赏花"
        },
        {
          id: "007",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/a6/6d97515091789602.png",
          desc: "世界之窗"
        },
        {
          id: "008",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/e7/d108f17143b40f02.png",
          desc: "4月特惠"
        },
        {
          id: "009",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png",
          desc: "东部华侨城"
        },
        {
          id: "010",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png",
          desc: "玩转长隆"
        }
      ],
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      },
      defaultImg: "this.src='@/assets/images/default.png'"
    };
  },
  computed: {
    pages() {
      let pages = [];
      this.iconList.forEach((item, index) => {
        let page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang="stylus" scoped>
  @import "~style/variable.styl"
  .wrapper >>> .swiper-pagination-bullet-active
    background $themeColor
  .wrapper >>> .swiper-pagination-bullet,.wrapper >>> .swiper-pagination-bullet-active
    width 6px
    height 6px
.icons >>> .swiper-container
  padding-bottom 50px
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 55%
  background-color $pageColor

//以上样式保证图片未加载出来前，已占据该位置，加载出图片不会出现抖动
.icons
  overflow hidden
  height 0
  padding-bottom 55%
  div.icon
    display inline-block
    overflow hidden
    width 25%
    height 0
    padding-bottom 22%
    text-align center
    .icon-img
      width 110px
      height 110px
      padding 5px 0
    .icon-desc
      font-size $fontSize
</style>
