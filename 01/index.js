
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
      <router-view></router-view>
    </div>
  `,
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

// 2. ルートをいくつか定義します
// 各ルートは 1 つのコンポーネントとマッピングされる必要があります。
// このコンポーネントは実際の `Vue.extend()`、
// またはコンポーネントオプションのオブジェクトでも構いません。
// ネストされたルートに関しては後で説明します
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/user/:id', component: User,
    children: [
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

// 3. ルーターインスタンスを作成して、ルートオプションを渡します
// 追加のオプションをここで指定できますが、
// この例ではシンプルにしましょう
const router = new VueRouter({
  routes // `routes: routes` の短縮表記
})
  
// 4. root となるインスタンスを作成してマウントします
// アプリケーション全体がルーターを認知できるように、
// ルーターをインジェクトすることを忘れないでください。
const app = new Vue({
router
}).$mount('#app')

// これで開始です!

