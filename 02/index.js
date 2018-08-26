import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
// import App from './App.vue'

Vue.use(VueRouter);
const router = new VueRouter({
        routes
    });

new Vue({
    el: '#app', // アプリをマウントする要素
    // components: { App }, // Appというコンポーネントを使うよ、という宣言
    router: router
});

console.log("index.js running!");
