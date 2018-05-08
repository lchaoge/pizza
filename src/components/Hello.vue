<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form>
      <input type="text" class="form-control" name="username" v-model="userName"> <br>
      <input type="text" class="form-control" name="age" v-model="age"> <br>
      <a class="btn btn-block btn-success" @click="addUser">提交</a>
    </form>
  </div>
</template>

<script>
	import axios from 'axios'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      userName: '',
      age: ''
    }
  },
  methods: {
    addUser() {
      axios.post('/api/user/addUser',{
	      	username: this.userName,
	        age: this.age
		    }).then(res=>{
					console.log(res)
      		if(res.status === 200){
      			alert('添加成功')
      			this.$router.push({name:'helloLink'})
      		}
			})
			
			// 后台req.body获取不到值
//    fetch("/api/user/addUser",{
//					method:"post",
//					header:{
//						'Content-Type': 'application/json'
//					},
//					credentials: 'include',
//					body:JSON.stringify({
//		      	username: this.userName,
//		        age: this.age
//		      })
//				})
//    	.then(res=>{
//    		console.log(res)
//    		if(res.status === 200){
//    			alert('添加成功')
//    		}else{
//    			alert("错误")
//    		}
//    	})
//				.catch(err=>console.log(err))

//    this.$http.post('/api/user/addUser', {
//	      	username: this.userName,
//	        age: this.age
//	      },{}).then((response) => {
//      console.log(response);
//    })
    }
  }
}
</script>