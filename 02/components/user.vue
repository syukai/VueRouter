<template>
	<div class="user">
		<!-- <h2>User {{ $route.params.id }}</h2>
		<router-link :to="'/user/' + $route.params.id + '/profile'">profile</router-link>
		<router-link :to="'/user/' + $route.params.id + '/posts'">posts</router-link>
		<button @click="$router.push('/user/' + $route.params.id + '/profile')">ボタンで移動</button> -->
		<div>
			nameでリンク<br />
			<button @click="toUser('mike')">mike</button>
			<button @click="toUser('sally')">sally</button>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
export default {
	created(){
		console.log("user.vue created.");
	},
  methods: {
		toUser(name){
			console.log("toUser running.");
      this.$router.push({name: 'userroute', params:{id:name}});
    }
  },
  // watch: {
  //   '$route' (to, from) {
  //     alert('change from ' + from.path + ' to ' + to.path);
  //   }
  // }
  beforeRouteUpdate(to, from, next){
		console.log("user.vue beforeRouteUpdate.");
    alert('change from ' + from.path + ' to ' + to.path + '!!');
    next();
  }
}
</script>

