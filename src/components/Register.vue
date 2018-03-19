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
						<div class="form-group">
							<label for="email">确认密码</label>
							<input type="password" class="form-control" v-model="confirmPassword"/>
						</div>
						<button type="submit" class="btn-block btn btn-success">注册</button>
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
				password:"",
				confirmPassword:""
			}
		},
		methods:{
			onSubmit(){
				console.log(this.email +"..."+this.password +"..."+this.confirmPassword);
				if(this.password === this.confirmPassword){
					var formData = {
						email : this.email,
						password : this.password,
						confirmPassword : this.confirmPassword
					}
					axios.post("users.json",formData).then(res=>{
						if(res.status===200){
							this.$router.push({name:'loginLink'});	
						}else{
							alert("注册系统错误~！");	
						}
					})
				}else{
					alert("两次密码输入不一致~！");		
				}
			}
		}
	}
</script>

<style>
</style>