import Vue from 'vue';
import App from './App.vue';
import store from './store';
import { DeepTownGameDataPlugin } from './game-data';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en';

Vue.use(ElementUI, { locale });
Vue.component('el-input-number', ElementUI.InputNumber);
Vue.component('el-select', ElementUI.Select);
Vue.component('el-option', ElementUI.Option);
Vue.component('el-optgroup', ElementUI.OptionGroup);

Vue.use(DeepTownGameDataPlugin);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
