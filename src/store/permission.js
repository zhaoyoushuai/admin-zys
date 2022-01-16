import { routerLayout } from "@/router";

function addRouterComponents(menus) {
  // 给每一个路由添加components
  return menus.map((item) => {
    return {
      ...item,
      component: () => import("@/views" + item.path),
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
      let children = [...addRouterComponents(menus)];
      return {
        ...routerLayout,
        children: children,
        redirect: children[0].path,
      };
    },
  },
};
