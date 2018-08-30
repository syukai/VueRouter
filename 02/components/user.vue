<template>
	<div class="user">
		<div>
			現在のユーザー{{id}}
			nameでリンク<br />
			<button @click="toUser('mike')">mike</button>
			<button @click="toUser('sally')">sally</button>
		</div>
		<transition :name="transitionName">
			<router-view class="child-view"></router-view>
		</transition>
	</div>
</template>
<script>
export default {
	data(){
		return {transitionName: 'slide-left'}
	},
	created(){
		// console.log("user.vue created.");
	},
	props: ['id'],
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
		console.log("user.vue beforeRouteUpdate.");
    // alert('change from ' + from.path + ' to ' + to.path + '!!');
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
		this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
		console.log("transitionName:"+this.transitionName);
    next();
	}
}
</script>

<style lang="css" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.child-view {
  position: absolute;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
