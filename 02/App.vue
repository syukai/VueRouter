<template>
	<!-- <div id="app" class="user">
		<span>this is "App"!</span>
		<router-view></router-view>
	</div> -->
	<div id="app" class="user">
		<h2>User {{ $route.params.id }}</h2>
		<router-link :to="'/user/' + $route.params.id + '/profile'">profile</router-link>
		<router-link :to="'/user/' + $route.params.id + '/posts'">posts</router-link>
		<button @click="$router.push('/user/' + $route.params.id + '/profile')">ボタンで移動</button>
		<!-- <div>
			nameでリンク<br />
			<button @click='toUser("mike")'>mike</button>
			<button @click='toUser("sally")'>sally</button>
		</div> -->
		<router-view></router-view>
	</div>    
</template>

<script>
export default {
	created(){
		console.log("App.created.");
	},
	mounted(){
		console.log("App.mounted.")
	},
  methods:{
    toUser(name){
      this.$router.push({name: 'userroute', params:{id:name}});
    }
	}
}
</script>

