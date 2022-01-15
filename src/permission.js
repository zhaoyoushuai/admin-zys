import router from "./router";
import { getStorage } from "@/utils/local";
import store from "@/store";

// import Layout from "@/layouts";
import home from "@/views/Home";

// 白名单
const whiteList = ["/login"];

router.beforeEach(async (to, form, next) => {
  if (getStorage("token")) {
    if (to.path === "/login") {
      next("/");
    } else {
      if (!store.state.user.userInfo) {
        try {
          // const user = await store.dispatch("user/getInfo");
          // const route = await store.dispatch("permission/generateRoute", user);
          // console.log(route);
          let router1 = {
            path: "/login",
            name: "login",
            component: home,
          };
          router.addRoute(
            //   {
            //   path: "/home",
            //   component: home,
            // }
            router1
          );
          console.log(router.getRoutes());
        } catch (e) {
          console.log(e);
          store.dispatch("user/fedLogout");
        }
      }

      next();
    }
  } else {
    if (whiteList.includes(to.path)) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
    }
  }
});
