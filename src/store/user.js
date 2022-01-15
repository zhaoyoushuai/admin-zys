import { login, getUser } from "@/api/user";
import { setStorage, removeStorage } from "@/utils";
import { MessageBox } from "element-ui";

const app = {
  namespaced: true,
  state: {
    userInfo: undefined,
  },
  mutations: {
    SET_INFO(state, data) {
      state.userInfo = data;
    },
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
    getInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getUser()
          .then((res) => {
            commit("SET_INFO", res);
            resolve(res);
          })
          .catch((e) => reject(e));
      });
    },
  },
};

export default app;
