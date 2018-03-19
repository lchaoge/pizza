<template>
	<div class="row">
		<div id="home">
			<div class="col-sm-12 text-center">
				<div class="background">
					<h1>欢迎进入点餐Pizza~</h1>
					<h2>这里有你喜欢的pizza</h2>
					<button @click="gotoMenu" type="button" class="btn btn-sessus">let's go menu</button>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		methods:{
			gotoMenu(){
//				 跳转到上一次浏览的页面
//				this.$router.go(-1)
					
//					跳转到指定的地址
//				this.$router.replace('/menu');

//					跳转到指定路由的名字下
//					this.$router.replace({name:'menuLink'});
				
//				通过push进行跳转
//				this.$router.push('/menu')
				this.$router.push({name:'menuLink'});
				
			}
		}
	}
</script>

<style>
	#home{
		background: #42B983;
		width: 100%;
		padding: 10%;
	}
	h1,h2{
		margin: 6%;
	}
	.background{
		background: #eee;
		opacity: 0.8;
		max-width: 70vw;
		margin: 0 auto;
		padding: 20px 0;
	}
</style>