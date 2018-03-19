<template>
	<div class="row mb-3">
		<div class="col-md-12 col-lg-12">
			<div class="card">
				<div class="card-body">
					<img class="mx-auto d-block" src="../assets/logo.png"/>
					<form @submit.prevent="onSubmit">
						<div class="form-group">
							<label for="email">邮箱</label>
							<input type="email" class="form-control" v-model="email"/>
						</div>
						<div class="form-group">
							<label for="email">密码</label>
							<input type="password" class="form-control" v-model="password"/>
						</div>
						<button type="submit" class="btn-block btn btn-success">登录</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data(){
			return{
				email:"",
				password:""
			}
		},
		beforeRouteEnter:(to,from ,next)=>{
//			this.$store.dispatch("setUser",null)
			next(vm=>vm.$store.dispatch("setUser",null))
		},
		methods:{
			onSubmit(){
				axios.get('users.json').then(res=>{
					console.log(res);
					const data = res.data;
					const users = [];
					for (let key in data) {
						const user = data[key]
						users.push(user);
					}
					
					var result = users.filter((user)=>{
						return user.email === this.email && user.password===this.password
					})
					
					console.log(result);
					if(result != null && result.length>0){
						this.$store.dispatch("setUser",result[0].email)
						this.$router.push({name:'homeLink'});
					}else{
						alert("账号密码输入错误！");
						this.$store.dispatch("setUser",null)
					}
					
				})
				console.log(this.email +"..."+this.password +"...");
				
			}
		}
	}
</script>

<style>
</style>