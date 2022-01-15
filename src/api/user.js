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
        ],
      });
    }, 500);
  });
}
