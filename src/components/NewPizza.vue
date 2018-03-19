<template>
	<form>
		<h3 class="my-5 text-muted">添加新的pizza</h3>
		<div class="form-group row">
			<label for="" class="col-sm-1">品种</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="newPizza.name"/>
			</div>
		</div>
		<div class="form-group row">
			<label for="" class="col-sm-1">描述</label>
			<div class="col-sm-11">
				<textarea rows="5" class="form-control" v-model="newPizza.desc"/>
			</div>
		</div>
		<p><strong>选项1</strong></p>
		<div class="form-group row">
			<label for="" class="col-sm-1">尺寸</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="newPizza.size1"/>
			</div>
		</div>
		<div class="form-group row">
			<label for="" class="col-sm-1">价格</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="newPizza.price1"/>
			</div>
		</div>
		<p><strong>选项2</strong></p>
		<div class="form-group row">
			<label for="" class="col-sm-1">尺寸</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="newPizza.size2"/>
			</div>
		</div>
		<div class="form-group row">
			<label for="" class="col-sm-1">价格</label>
			<div class="col-sm-11">
				<input type="text" class="form-control" v-model="newPizza.price2"/>
			</div>
		</div>
		<div class="form-group">
			<button @click="addMenuItem" type="button" class="btn btn-block btn-success">添加</button>
		</div>
	</form>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return {
				newPizza:{}
			}
		},
		methods:{
			addMenuItem(){
				let data = {
					name:this.newPizza.name,
					desc:this.newPizza.desc,
					options:[
						{
							size:this.newPizza.size1,
							price:this.newPizza.price1
						},
						{
							size:this.newPizza.size2,
							price:this.newPizza.price2
						}
					]
				}
				console.log(data)	
				axios.post('menu.json',data).then(res=>{
					if(res.status===200){
//						this.$router.push({name:"menuLink"})
						console.log(res)
						this.$store.commit("addMenuItem",data)

					}else{
						console.log("服务器异常")
					}
				})
//				fetch('https://wd6783237698uedlow.wilddogio.com/menu.json',{
//					method:"post",
//					headers:{
//						"Content-type":"application/json"
//					},
//					body:JSON.stringify(data)
//				})
//					.then(res=>res.json())
//					.then(data=>this.$router.push({name:"menuLink"}))
//					.catch(err=>console.log(err))
			}
		}
	}
</script>

<style>
</style>