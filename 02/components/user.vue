<template>
	<div class="user">
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
		// console.log("user.vue created.");
	},
  methods: {
		/**
		 * 名前付きルートを使ってルート遷移
		 */
		toUser(name){
			// console.log("toUser running.");
      this.$router.push({name: 'userroute', params:{id:name}});
    }
	},
	// ルート前処理
  beforeRouteUpdate(to, from, next){
		// console.log("user.vue beforeRouteUpdate.");
    // alert('change from ' + from.path + ' to ' + to.path + '!!');
    next();
  }
}
</script>

