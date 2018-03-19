<template>
	<div class="row">
		<div class="col-sm-12 col-md-8">
			<!--new pizza-->
			<app-new-pizza></app-new-pizza>
		</div>
		<div class="col-sm-12 col-md-4">
			<!--品种展示-->
			<h3 class="text-muted my-5">菜单</h3>
			<table class="table">
				<thead class="table table-default">
					<tr>
						<td>品种</td>
						<td>删除</td>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in getMenuItems">
						<td>{{item.name}}</td>
						<td>
							<button @click="deleteMenu(item)" type="button" class="btn btn-outline-danger btn-sm">&times;</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	import NewPizza from './NewPizza'
	export default{
		data(){
			return {
//				getMentItem:[]
			}
		},
		components:{
			'app-new-pizza':NewPizza
		},
		computed:{
			getMenuItems:{
				get(){
					// 在vuex中获取数据
//					return this.$store.state.menuItems	
					return this.$store.getters.getMenuItems
				},
				set(){
					
				}
				
			}
		},
		created(){
			fetch("https://wd6783237698uedlow.wilddogio.com/menu.json")
				.then(res=>{
					return res.json()
				})
				.then(data=>{
					console.log(data)
					let menuArray = []
					for (let key in data) {
						let menu = data[key];
						menu.id = key
						menuArray.push(menu)
					}
//					this.getMentItem = menuArray
					this.$store.commit("setMenuItems",menuArray)
				})
		},
		methods:{
			deleteMenu(item){
				fetch("https://wd6783237698uedlow.wilddogio.com/menu/"+item.id+"/.json",{
					method:"DELETE",
					header:{
						"Content-type":"application/json"
					}
				}).then(res=>res.json())
					.then(data=>{
//						this.$router.push({name:"menuLink"})
						this.$store.commit("removeMenuItems",item)
					})
					.catch(err=>console.log(err))
				
				
			}
		}
		// 进入组件守卫
//		beforeRouteEnter:(to,from,next)=>{
//			next(vm=>{
//				alert("hello  " +vm.name)	
//			})
//			
//		},
//		beforeRouteLeave:(to,from,next)=>{
//			if(confirm("确定离开吗？")){
//				next();
//			}else{
//				next(false);
//			}
//			
//		},
	}
</script>

<style>
</style>