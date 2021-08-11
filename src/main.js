import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/normalize.css";
import "./assets/css/reset.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
import VueAxios from "vue-axios";
import moment from 'moment';	
import VueLazyload from "vue-lazyload";
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont.js'
Vue.use(VueAxios, axios);
Vue.use(ElementUI);
Vue.use(moment)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: require('./assets/loding.gif'),
  attempt: 3,
  // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
  listenEvents: ['scroll']
})
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
