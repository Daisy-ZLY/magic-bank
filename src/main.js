import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAwesomeSwiper from "vue-awesome-swiper";
//引入mand-mobile
// import mandMobile from "mand-mobile";
// import "mand-mobile/lib/mand-mobile.css";
import { Button } from "mand-mobile";
Vue.use(Button);
//重置样式
import "./assets/style/reset.css";
import "./assets/style/border.css";
import "./assets/style/public.css";
// 图标库样式
import "./assets/style/iconfont.css";
import "swiper/dist/css/swiper.css";

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
// Vue.use(mand-mobile);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
