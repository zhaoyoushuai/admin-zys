import Vue from "vue";
import Vuex from "vuex";

import user from "./user";
import permission from "./permission";
import app from "./app";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    app,
    permission,
  },
});
