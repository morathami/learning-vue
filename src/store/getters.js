export default {
  unregisteredUsers (state) {
    return state.users.filter(user => {
      return !user.registered
    })
  },
  registeredUsers (state) {
    return state.users.filter(user => {
      return user.registered
    })
  },
  totalRegistrations (state, getters) {
    return getters.registeredUsers.length
  }
}
