import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layouts";

Vue.use(VueRouter);

/**
 *  hidden: true
 *  redirect: noRedirect    if set noRedirect will no redirect in the breadcrumb
 *  name:'router-name'
 *  meta:{
 *   title: "about",                                    右侧菜单展示内容
 *   icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
 *   activeMenu:"/xxx"                                  高亮地址，格式: /xxx/xxx
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
    {
      path: "nested/child1/second",
      name: "NestedChild1Second",
      component: () => import("@/views/nested/child1/second"),
      meta: {
        title: "嵌套的路由 / 子路由1 / 二级路由",
        activeMenu: "/nested/child1",
      },
    },
    {
      path: "without-nested/second",
      name: "WithoutNestedSecond",
      component: () => import("@/views/without-nested/second"),
      meta: {
        title: "无嵌套的路由 / 二级路由",
        activeMenu: "/without-nested",
      },
    },
  ],
};

const staticRouter = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login.vue"),
  },

  // {
  //   path: "/404",
  //   component: () => import("@/views/404"),
  // },
];

// 未匹配的路由需要跳转的页面在这里配置
export const unmatchedRoute = {
  path: "*",
  redirect: "/404",
};

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: staticRouter,
});

export default router;
