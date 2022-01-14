import router from "./router";
import { getStorage } from "@/utils/local";

// 白名单
const whiteList = ["/login"];

router.beforeEach(async (to, form, next) => {
  if (getStorage("token")) {
    if (to.path === "/login") {
      next("/");
    } else {
      next();
    }
  } else {
    if (whiteList.includes(to.path)) {
      next();
    } else {
      console.log(to.path);
      next(`/login?redirect=${to.path}`);
    }
  }
});
