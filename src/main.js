import Vue from 'vue'
// import VueRouter from 'vue-router'
import Axios from '../node_modules/axios/index'
import ElementUI from 'element-ui'
import echarts from 'echarts'
// import moment from 'moment'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import '../node_modules/animate.css'
import App from './App.vue'
import router from './router' 

Vue.prototype.$ajax = Axios;
Vue.prototype.$echarts = echarts;

Vue.use(ElementUI);
// Vue.filter('moment',function(value,formatString){
//   formatString = formatString || 'YYYY-MM-DD';
//   return moment.unix(value).format(formatString);//时间戳转时间
// });


new Vue({
  router,
  // components: {
  //   App
  // },
  render: h => h(App)
}).$mount('#app');
