import User from './components/user.vue'

// 1. ルートコンポーネントを定義します
// 他のファイルからインポートすることもできます
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const UserProfile = {template: '<div>show Profile</div>'}
const UserPosts = {template: '<div>post papers</div>'}

// console.log("routes.js running.");

export default [
	// { path: '/' , name: 'user', component: User},
	{ path: '/foo'
		, name: 'fooroute'	// 名前付きルート
		// 名前付きビューにそれぞれ表示する
		, components:{
				default: Foo 
			, invalid: Bar}
	},
	{ path: '/bar'
	, name: 'barroute'		//名前付きルート
		// 名前付きビューにそれぞれ表示する
		, components: {
			default: Bar
			,invalid: Foo}
	},
	{ path: '/user/:id', name: 'userroute', component: User,
		props: true,		// Booleanモードのプロパティ $router.paramsがプロパティとなる
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
		] 
	},
	{
		// hogeでアクセスしたらfooにリダイレクトする。
		// hogehogeでアクセスしたらURLはhogehogeのままだが中身はfooにリダイレクトされてる
		path: '/hoge', redirect:'/foo', alias:'/hogehoge'
	},
	{
		path: '/fuga', redirect: {name:'barroute'}
	},
	{
		path: '/ore', redirect: to=>{
			const { hash, params, query } = to;
			console.log("hash is " + hash);
			console.log("params is " + JSON.stringify(params));
			console.log("query is "+ JSON.stringify(query));
			return 'foo';
		}
	}
]