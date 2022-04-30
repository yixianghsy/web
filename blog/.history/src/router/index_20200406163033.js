import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/components/CommonLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("@/views/Home.vue"),
        name: "home",
      },
      {
        path: "/detail/:id",
        component: () => import("@/views/Detail.vue"),
      },
      {
        path: "/personal",
        component: () => import("@/views/Personal.vue"),
        meta: {
          requireAuth: true, //true为这个页面需要登录权限
        },
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/views/Login.vue"),
  },
];

const router = new VueRouter({
  routes
});

export default router;
