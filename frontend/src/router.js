import Vue from "vue";
import Router from "vue-router";
import Page_1 from "./components/Page1.vue";
import Page_2 from "./components/Page2.vue";
import Login from "./components/Login.vue";
import Store from "@/store/index.js";

Vue.use(Router);

//export default new Router({
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    //ルーティングの設定
    {
      path: "/page1", //ブラウザに表示されるURL
      component: Page_1, //表示するコンポーネント
      name: "page1", //ルートの名前を指定
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/Page2",
      component: Page_2,
      name: "page2",
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/",
      component: Login,
      name: "home",
    },
    {
      path: "/Login",
      component: Login,
      name: "login",
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!Store.state.isLogin) {
      next({
        path: "/Login",
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
