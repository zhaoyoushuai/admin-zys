export default {
  namespaced: true,
  state: {
    device: "desktop",
    sidebarOpened: localStorage.sidebarStatus
      ? !!+localStorage.sidebarStatus
      : true,
  },
  mutations: {
    SET_DEVICE(_state, device) {
      _state.device = device;
    },
    SET_SIDEBAR(_state, status) {
      localStorage.sidebarStatus = status;
      _state.sidebarOpened = !!status;
    },
  },
  actions: {
    setDevice({ commit }, device) {
      commit("SET_DEVICE", device);
    },
    setSidebar({ commit }, status) {
      commit("SET_SIDEBAR", status);
    },
  },
};
