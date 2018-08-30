<template>
	<div id="app" class="user">
		<h2>User {{ $route.params.id }}</h2>
		<transition>
			<router-link :to="'/user/' + $route.params.id + '/profile'">profile</router-link>
		</transition>
		<transition>
			<router-link :to="'/user/' + $route.params.id + '/posts'">posts</router-link>
		</transition>
		<button @click="$router.push('/user/' + $route.params.id + '/profile')">ボタンで移動</button>
		<transition>
			<router-view></router-view>
		</transition>
		<transition>
			<router-view name="invalid" style="background-color:#888"></router-view>
		</transition>
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

