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
            path: "/home",
            name: "home",
            icon: "home",
          },
          {
            path: "/about",
            name: "about",
            icon: "home",
          },
          {
            path: "/seting",
            name: "系统设置",
            icon: "home",
            children: [
              {
                path: "user",
                name: "用户列表",
                icon: "home",
              },
              {
                path: "permission",
                name: "权限管理",
                icon: "home",
              },
            ],
          },
        ],
      });
    }, 500);
  });
}
