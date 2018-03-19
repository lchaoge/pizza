<template>
	<div class="row">
		<!--菜单-->
		<div class="col-md-8 col-sm-12">
			<table class="table">
				<thead class="thead-default">
					<tr>
						<th>尺寸</th>
						<th>价格</th>
						<th>加入</th>
					</tr>
				</thead>
				<tbody v-for="item in getMenuItems">
					<tr>
						<td>
							<strong :title="item.desc">{{item.name}}</strong>
						</td>
					</tr>
					<tr v-for="option in item.options">
						<td>{{option.size}}寸</td>
						<td>{{option.price}}RMB</td>
						<td><button type="button" class="btn btn-sm btn-outline-success" @click="addPizza(item,option)">+</button></td>
					</tr>
				</tbody>
			</table>
		</div>
		<!--购物车-->
		<div class="col-sm-12 col-md-4">
			<div v-if="baskets.length>0">
				<table class="table">
					<thead class="thead-default">
						<tr>
							<th>数量</th>
							<th>品种</th>
							<th>价格</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="item in baskets">
							<td>
								<button @click="reduceQuantity(item)" class="btn btn-sm">-</button>
								<span>{{item.quantity}}</span>
								<button @click="addQuantity(item)" class="btn btn-sm">+</button>
							</td>
							<td>{{item.name}}-{{item.size}}寸</td>
							<td>{{item.price * item.quantity}}RMB</td>
						</tr>
					</tbody>
				</table>
				<p>总价：{{total +"RMB"}}</p>
				<button class="btn btn-success btn-block">提交</button>
			</div>
			<div v-else>
				<p>{{basketText}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
//				getMenuItems:{},
				baskets:[],
				basketText:"购物车暂无商品!!"
			}
		},
		created(){
			fetch("https://wd6783237698uedlow.wilddogio.com/menu.json")
				.then(res=>res.json())
				.then(data=>{
					console.log(data)
//					this.getMenuItems = data;
					this.$store.commit("setMenuItems",data)
				})
		
		},
		computed:{
			getMenuItems(){
				// 在vuex中获取数据
//				return this.$store.state.menuItems
				return this.$store.getters.getMenuItems
			},
			total(){
				let totalCost = 0;
				for(let index in this.baskets){
					let individualItem = this.baskets[index];
					totalCost += individualItem.price * individualItem.quantity;
				}
				return totalCost;
			}
		},
		methods:{
			addPizza(item,option){
				let basket = {
					name:item.name,
					size:option.size,
					price:option.price,
					quantity:1
				}
				if(this.baskets.length>0){
					//过滤
					let result = this.baskets.filter((basket)=>{
						return basket.name===item.name && basket.price === option.price
					})
					if(result.length>0 && result!=null){
						result[0].quantity++
					}else{
						this.baskets.push(basket);
					}
				}else{
					this.baskets.push(basket);	
				}
				
			},
			reduceQuantity(item){
				item.quantity--;
				if(item.quantity<=0){
					this.removeQuantity(item);
				}
			},
			addQuantity(item){
				item.quantity++;
			},
			removeQuantity(item){
				this.baskets.splice(this.baskets.indexOf(item),1);
			}
		}
	}
</script>

<style>
</style>