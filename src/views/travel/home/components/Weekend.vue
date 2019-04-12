<template>
  <div class="wrapper">
    <h2 class="title">周末去哪儿</h2>
    <ul class="item-list">
      <li class="item" v-for="item of weekendList" :key="item.id">
        <div class="item-img">
          <div class="item-img">
            <img :src="item.imgUrl" :alt="item.name" />
          </div>
        </div>
        <div class="item-info">
          <p class="info-name ellipsis">{{ item.name }}</p>
          <p class="info-desc ellipsis">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
    <div class="tips">
      <span class="tips-name">票面价</span>
      <span class="tips-desc"
        >是指通过景区指定窗口售卖的纸质门票上标注的价格</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      weekendList: [
        {
          id: "001",
          name: "清远周边逛",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg",
          desc:
            "人人都有一双发现美的眼睛，身边的事物最熟悉不过，那你可曾发现了被人遗漏的美？"
        },
        {
          id: "002",
          name: "浮在海上的绿洲",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg",
          desc:
            "南国滨海之城，避寒胜地，有暖暖的阳光，海风习习，吃着海鲜逛逛老街多惬意啊"
        },
        {
          id: "003",
          name: "深圳必打卡",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/fa/ca65fde9677de2.jpg_r_640x214_4500e3ff.jpg",
          desc: "来到深圳，你需要来这里签到"
        },
        {
          id: "004",
          name: "欢乐长隆",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1602/88/bf120edeaea383.jpg_r_640x214_f8591f7b.jpg",
          desc:
            "世界欢乐汇聚长隆，这里拥有多个大型游乐设备和精彩的演出，和小伙伴们一起感受刺激的体验"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import "~style/variable.styl"
.wrapper
  .title
    line-height 80px
    padding-left 24px
  .item-list
    .item
      background-color $pageColor
      margin-bottom 5px
      .item-img
        width 100%
        overflow hidden
        height 0
        padding-bottom 36%
        img
          width 100%
      .item-info
        padding 24px
        p
          line-height 42px
        .info-name
          font-size $textSize
        .info-desc
          font-size $smallSize
          color $fontColor
  .tips
    padding 14px 10px
    color $fontColor
    background-color $pageColor
    font-size $smallSize
    .tips-name
      font-weight bold
</style>
