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
  actions: {
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
