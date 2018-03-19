// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import { routes } from './router/index'
import axios from 'axios'
import {store} from './store/index'

axios.defaults.baseURL = 'https://wd6783237698uedlow.wilddogio.com/'

// 配置vue原型
Vue.prototype.http = axios

Vue.use(VueRouter);


const router = new VueRouter({
	routes,
	mode:'history',
	scrollBehavior(to,from,savedPosition){
//		return {x:0,y:100}
//		return {selector:'.btn'}
		if(savedPosition){
			return savedPosition;
		}else{
			return {x:0,y:0};
		}
	}
});

//全局守卫
//router.beforeEach((to,from,next)=>{
//	if(to.path == '/login' || to.path == '/register'){
//		next();
//	}else{
//		alert("还没有登录，请先登录！");
//		next('/login');
//	}
//});

//后置钩子
//router.afterEach((to,from)=>{
//	alert("after each");
//});


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
