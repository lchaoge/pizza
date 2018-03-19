// 一级路由
import Admin from './../components/Admin'
import Home from './../components/Home'
import Login from './../components/Login'
import Menu from './../components/Menu'
import Register from './../components/Register'
import About from './../components/about/about'

//二级路由
import History from './../components/about/History'
import Contact from './../components/about/Contact'
import OrderingGuide from './../components/about/OrderingGuide'
import Delivery from './../components/about/Delivery'

//三级路由
import Phone from './../components/about/contact/Phone'
import Personname from './../components/about/contact/Personname'

export const routes = [
	{path:'/',name:'homeLink',components:{
		default:Home,
		'historyLink':History,
		'deliveryLink':Delivery,
		'orderingGuideLink':OrderingGuide
	}},
	{path:'/menu',name:'menuLink',component:Menu},
	{path:'/admin',name:'adminLink',component:Admin,
//	beforeEnter:(to,from,next)=>{
//		路由独享守卫
//		alert("非登录状态不能进入admin");
//		next();

//		if(to.path == '/login' || to.path == '/register'){
//			next();
//		}else{
//			alert("还没有登录，请先登录！");
//			next('/login');
//		}
//	}
	},
	{path:'/login',name:'loginLink',component:Login},
	{path:'/register',name:'registerLink',component:Register},
	{path:'/about',name:'aboutLink',redirect:'/contact',component:About,children:[
		{path:'/history',name:'historyLink',component:History},
		{path:'/contact',name:'contactLink',redirect:'/phone',component:Contact,children:[
			{path:'/phone',name:'phoneLink',component:Phone},
			{path:'/personname',name:'personnameLink',component:Personname},
		]},
		{path:'/orderingGuide',name:'orderingGuideLink',component:OrderingGuide},
		{path:'/delivery',name:'deliveryLink',component:Delivery},
	]},
	{path:'*',redirect:'/'}
]
