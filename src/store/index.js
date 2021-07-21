import Vue from "vue";
import Vuex from "vuex";
import gql from "graphql-tag";
import { apolloClient } from "../main.js";

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
  getters: {
    unregisteredUsers(state) {
      return state.users.filter(user => {
        return !user.registered;
      });
    },
    registeredUsers(state) {
      return state.users.filter(user => {
        return user.registered;
      });
    },
    totalRegistrations(state, getters) {
      return getters.registeredUsers.length;
    }
  },
  mutations: {
    register(state, payload) {
      const user = state.users.find(user => {
        return user.id === payload.id;
      });
      user.registered = true;
    },
    unregister(state, payload) {
      const user = state.users.find(user => {
        return user.id === payload.id;
      });
      user.registered = false;
    },
    SET_USERS(state, payload) {
      state.users = payload;
    }
  },
  actions: {
    getAllUsers(context) {
      apolloClient
        .query({
          query: gql`
            {
              allUsers {
                id
                name
                registered
              }
            }
          `
        })
        .then(result => {
          context.commit("SET_USERS", result.data.allUsers);
        });
    }
  }
});
