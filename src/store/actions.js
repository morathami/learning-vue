export default {
  registerUser ({ commit }, userId) {
    setTimeout(() => {
      commit('register', userId)
    }, 1000)
  }
}
