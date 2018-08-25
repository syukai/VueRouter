// 1. ルートコンポーネントを定義します
// 他のファイルからインポートすることもできます
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const UserProfile = {template: '<div>show Profile</div>'}
const UserPosts = {template: '<div>post papers</div>'}
// 
const User = {
  template:  `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-link to="/user/mike/profile">profile</router-link>
      <router-link to='/user/mike/posts'>posts</router-link>
      <button @click='$router.push("/user/mike/profile")'>ボタンで移動</button>
      <div>
        nameでリンク<br />
        <button @click='toUser("mike")'>mike</button>
        <button @click='toUser("sally")'>sally</button>
      </div>
      <router-view></router-view>
    </div>
  `,
  methods:{
    mike(){
      this.$router.push({name: 'userroute', params:{id:'mike'}});
    },
    toUser(name){
      this.$router.push({name: 'userroute', params:{id:name}});
    }
  },
  // watch: {
  //   '$route' (to, from) {
  //     alert('change from ' + from.path + ' to ' + to.path);
  //   }
  // }
  beforeRouteUpdate(to, from, next){
    alert('change from ' + from.path + ' to ' + to.path + '!!');
    next();
  }
}

export default [
	{ path: '/foo', name: 'fooroute', component: Foo },
	{ path: '/bar', name: 'barroute', component: Bar },
	{ path: '/user/:id', name: 'userroute', component: User,
		children: [
			// 公式ドキュメントではこのchildルートが無いと
			// "/user/foo"のときUserアウトレットで何も描画されないとなっているが描画されるっぽい
			// {
			//   path:'',component:{template:`<span>nothing</span>`}
			// },
			{
				// /user/:id/profile がマッチした時に
				// UserProfile は User の <router-view> 内部で描画されます
				path: 'profile',
				component: UserProfile
			},
			{
				// /user/:id/posts がマッチした時に
				// UserPosts は User の <router-view> 内部で描画されます
				path: 'posts',
				component: UserPosts
			}
		] }
]