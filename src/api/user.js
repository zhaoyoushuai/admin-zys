export function login() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "access-token",
      });
    }, 500);
  });
}
