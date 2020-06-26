import Vue from 'vue';
import App from "./App.vue"
import "./assets/style/global.css"
import "./assets/style/reset.css"
import router from "../src/router/index.js"
import store from "../src/store/index.js"
import {login, whoAmI,loginOut, reg} from "./services/userService.js"
async function test() {
  // var resp = await whoAmI();
  // console.log(resp);
  //loginOut();
  // var resp = await reg({
  //   loginId: "userfan",
  //   loginPwd:"123123",
  //   nickname: "哈儿",
  // });
  // console.log(resp);
  // var resp = await login({
  //   loginId: "userfan",
  //   loginPwd:"123123"
  // });
  // console.log(resp);
}
test();
//频道数据一开始就要触发
store.dispatch("channels/fetchDatas");
store.dispatch("loginUser/whoAmI");
new Vue({
  render: h =>h(App),
  router, //3.配置路由到vue实例中
  store,
}).$mount("#app")