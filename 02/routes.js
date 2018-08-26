import User from './components/user.vue'

// 1. ルートコンポーネントを定義します
// 他のファイルからインポートすることもできます
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const UserProfile = {template: '<div>show Profile</div>'}
const UserPosts = {template: '<div>post papers</div>'}
// 
console.log("routes.js running.");

export default [
	// { path: '/' , name: 'user', component: User},
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