import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import App from './App.vue'

Vue.use(VueRouter);
const router = new VueRouter({
        routes
    });

new Vue({
    el: '#app', // アプリをマウントする要素
    render: h=>(App),
    // template: '<App/>',
    // components:{App},
    router: router
});

console.log("index.js running!");
