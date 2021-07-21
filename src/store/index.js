import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      { id: 1, name: "Aang", registered: false },
      { id: 2, name: "Katara", registered: false },
      { id: 3, name: "Sokka", registered: false },
      { id: 4, name: "Zuko", registered: false }
    ]
  },
  getters,
  mutations,
  actions
});
