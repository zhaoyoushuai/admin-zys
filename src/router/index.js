import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layouts";

Vue.use(VueRouter);

/**
 *  hidden: true
 *  redirect: noRedirect    if set noRedirect will no redirect in the breadcrumb
 *  name:'router-name'
 *  meta:{
 *   title: 'title'
 *   icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
 *   activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
 *  }
 *
 */

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};

export const routerLayout = {
  path: "/",
  component: Layout,
  children: [
    // {
    //   path: "/",
    //   name: "home",
    //   meta: {
    //     title: "home",
    //   },
    //   component: () => import("@/views/Home.vue"),
    // },
    // {
    //   path: "/about",
    //   name: "about",
    //   meta: {
    //     title: "about",
    //   },
    //   component: () => import("@/views/about.vue"),
    // },
  ],
};

export const contanteRouter = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login.vue"),
  },
  {
    path: "/404",
    component: () => import("@/views/404"),
  },
];

// 未匹配的路由需要跳转的页面在这里配置
export const unmatchedRoute = {
  path: "*",
  redirect: "/404",
};

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: contanteRouter,
});

export default router;
