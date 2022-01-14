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

const contanteRouter = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
  },
];

const routes = [
  ...contanteRouter,
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        name: "Home",
        meta: {
          title: "home",
        },
        component: () => import("@/views/Home.vue"),
      },
    ],
  },
  {
    path: "/about",
    component: Layout,
    children: [
      {
        path: "/",
        name: "About",
        meta: {
          title: "about",
        },
        component: () => import("@/views/About.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
