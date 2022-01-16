import router, { unmatchedRoute } from "./router";
import { getStorage } from "@/utils/local";
import store from "@/store";

// 白名单
const whiteList = ["/login"];

router.beforeEach(async (to, form, next) => {
  console.log(router.getRoutes());
  if (getStorage("token")) {
    if (to.path === "/login") {
      next("/");
    } else {
      if (!store.state.user.userInfo) {
        try {
          const user = await store.dispatch("user/getInfo");
          store.dispatch("permission/setMenus", user.menus);
          const route = await store.dispatch("permission/generateRoute", user);
          router.addRoute(route);
          router.addRoute(unmatchedRoute);
          next({ ...to, replace: true }); // hack 确保刷新页面时可以加载当前路由, set replace: true 设置之后不会留下当前路由的记录
        } catch (e) {
          console.log(e);
          store.dispatch("user/logout");
        }
      } else {
        next();
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
    }
  }
});
