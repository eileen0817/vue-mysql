// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


// 引用API文件
import axios from 'axios'
import {post, fetch, patch, put} from './api'
import ElementUI  from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';//样式文件一定要引入 
import './style/style.scss'

import router from './router'
import store from './store'
//定义全局变量
Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;
Vue.use(ElementUI) 

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
