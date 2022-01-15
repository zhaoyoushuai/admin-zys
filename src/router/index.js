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
  routerLayout,
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login.vue"),
  },
  {
    path: "/404",
    component: () => import("@/views/404"),
  },
  {
    path: "*",
    redirect: "/404",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: contanteRouter,
});

export default router;
