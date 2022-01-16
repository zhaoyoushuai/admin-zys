import { routerLayout } from "@/router";
import { EmptyLayout } from "@/layouts";
import path from "path";

function getAsyncRoutes(menus, parentPath = "") {
  // 给每一个路由添加components
  console.log(menus);
  return menus.map((item) => {
    const hasChild = item.children && item.children.length > 0;
    const _children = hasChild
      ? getAsyncRoutes(item.children, item.path)
      : undefined;
    return {
      ...item,
      component: hasChild
        ? EmptyLayout
        : () => import("@/views" + path.resolve(parentPath, item.path)),
      children: _children,
    };
  });
}

export default {
  namespaced: true,
  state: {
    menus: [],
  },
  mutations: {
    SET_MENUS(state, data) {
      state.menus = data;
    },
  },
  actions: {
    setMenus({ commit }, data) {
      commit("SET_MENUS", data);
    },
    generateRoute(_, data) {
      const { menus } = data;
      let children = [...getAsyncRoutes(menus)];
      return {
        ...routerLayout,
        children: children,
        redirect: children[0].path,
      };
    },
  },
};
