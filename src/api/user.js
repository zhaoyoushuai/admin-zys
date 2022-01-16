export function login() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "access-token",
      });
    }, 500);
  });
}

// 获取用户信息
export function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        username: "admin",
        mobile: "13173276550",
        menus: [
          {
            path: "/dashboard",
            name: "首页",
            icon: "home",
          },
          {
            path: "/about",
            name: "about",
            icon: "home",
          },
          {
            name: "嵌套的路由",
            icon: "nested",
            path: "nested",
            children: [
              {
                name: "子路由1",
                path: "child1",
              },
              {
                name: "子路由2",
                path: "child2",
              },
            ],
          },
          {
            name: "无嵌套的路由",
            icon: "file",
            path: "without-nested",
          },
        ],
      });
    }, 500);
  });
}
