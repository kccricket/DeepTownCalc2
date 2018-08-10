import Vue, { VNode } from "vue";
import App from "@/App.vue";
import store from "@/store";

import "normalize.css";
import "element-ui/lib/theme-chalk/index.css";
import ElementLocale from "element-ui/lib/locale";
import ElementLangEn from "element-ui/lib/locale/lang/en";

ElementLocale.use(ElementLangEn);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h): VNode => h(App)
}).$mount("#app");
