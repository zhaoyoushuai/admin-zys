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
            path: "/Home",
            name: "home",
            icon: "home",
          },
          {
            path: "/About",
            name: "about",
            icon: "home",
          },
        ],
      });
    }, 500);
  });
}
