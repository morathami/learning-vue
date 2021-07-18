import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentText: '',
    allTexts: []
  },
  mutations: {
    setCurrentText (state, payload) {
      state.currentText = payload
      state.allTexts.push(payload)
    }
  },
  actions: {},
  modules: {},
  getters: {
    getCurrentText (state) {
      return state.currentText
    }
  }
})
