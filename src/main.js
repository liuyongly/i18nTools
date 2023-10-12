import Vue from 'vue'
import App from "./App.vue";
import router from '@/router'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import 'vuetify/dist/vuetify.min.css'
import SvgIcon from '@jamescoyle/vue-icon';
import { ipcRenderer } from "electron";
// Vue.config.productionTip = false;
Vue.component('SvgIcon', SvgIcon)
Vue.prototype.ipcRenderer = ipcRenderer;
new Vue({
  vuetify,
  render: h => h(App),
  router,
}).$mount('#app')
