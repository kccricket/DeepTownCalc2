import Vue, { VNode } from "vue";
import App from "@/App.vue";
import store from "@/store";
import GameDataPlugin from "@/data/game-data";

import { Button, InputNumber, Select, Option, OptionGroup } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import ElementLocale from "element-ui/lib/locale";
import ElementLangEn from "element-ui/lib/locale/lang/en";

ElementLocale.use(ElementLangEn);

Vue.component("el-button", Button);
Vue.component("el-input-number", InputNumber);
Vue.component("el-select", Select);
Vue.component("el-option", Option);
Vue.component("el-optgroup", OptionGroup);

Vue.use(GameDataPlugin);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h): VNode => h(App)
}).$mount("#app");
