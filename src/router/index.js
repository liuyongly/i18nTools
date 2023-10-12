import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "hash",
  routes: [
    {
      path: "/home",
      name: "Home",
      meta: {
        title: "首页",
        hideInMenu: true,
      },
      hidden: true,
      component: () => import("@/pages/homePage/homePage.vue"),
    },
    // {
    //   path: "/export",
    //   name: "export",
    //   meta: {
    //     title: "导出",
    //     hideInMenu: true,
    //   },
    //   hidden: true,
    //   component: () => import("@/pages/exportPage/exportPage.vue"),
    // },
    {
        path: '/',
        redirect: '/home'
    },
  ],
});

export default router;
