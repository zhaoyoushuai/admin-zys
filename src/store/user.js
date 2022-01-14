import { login } from "@/api/user";
import { setStorage, removeStorage } from "@/utils";
import { MessageBox } from "element-ui";

const app = {
  namespaced: true,
  state: {
    userInfo: undefined,
  },

  actions: {
    async logout(_, msg) {
      removeStorage("token");
      await MessageBox.confirm(msg || "用户信息失效，请重新登录", "提示", {
        type: "warning",
        confirmButtonText: "确定",
        showCancelButton: false,
        showClose: false,
        closeOnClickModal: false,
        closeOnPressEscape: false,
      });
      window.location.reload();
    },
    toLogin(_, data) {
      return new Promise((resolve, reject) => {
        login(data)
          .then((res) => {
            setStorage("token", res.token);
            resolve(res);
          })
          .catch((e) => reject(e));
      });
    },
  },
};

export default app;
