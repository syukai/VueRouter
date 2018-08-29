import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import App from './App.vue'

Vue.use(VueRouter);
const router = new VueRouter({
        routes
    });

router.beforeResolve((to, from, next) => {
    console.log(to);
    console.log(from);
    if(to.name==="userroute" && to.params.id==="mike"){
        console.log("route block!!");
        next(false);
    }else{
        next();
    }
  });

new Vue({
    el: '#app', // アプリをマウントする要素
    // render: h=>(App),    // renderではうまくいかない。（描画されない）
    template: '<App/>',
    components:{App},
    router: router
});

// console.log("index.js running!");
