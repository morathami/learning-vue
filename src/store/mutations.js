export default {
  register (state, payload) {
    const user = state.users.find(user => {
      return user.id === payload.id
    })
    user.registered = true
  },
  unregister (state, payload) {
    const user = state.users.find(user => {
      return user.id === payload.id
    })
    user.registered = false
  }
}
