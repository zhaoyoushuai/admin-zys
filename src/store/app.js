export default {
  namespaced: true,
  state: {
    sidebarOpened: localStorage.sidebarStatus
      ? !!+localStorage.sidebarStatus
      : true,
  },
  mutations: {
    SET_SIDEBAR(state, data) {
      localStorage.sidebarStatus = data;
      state.sidebarOpened = !!data;
    },
  },
  actions: {
    setSidebar({ commit }, data) {
      commit("SET_SIDEBAR", data);
    },
  },
};
