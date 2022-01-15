import { routerLayout } from "@/router";

function addRouterComponents(menus) {
  // 给每一个路由添加components
  return menus.map((item) => {
    return {
      ...item,
      components: () => import("@/views" + item.path),
    };
  });
}

export default {
  namespaced: true,
  state: {
    menus: [],
  },
  actions: {
    generateRoute(_, data) {
      const { menus } = data;
      return {
        ...routerLayout,
        children: [...addRouterComponents(menus)],
        redirect: [...addRouterComponents(menus)][0].path,
      };
    },
  },
};
