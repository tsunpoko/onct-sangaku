export const state = () => ({
  user: null,
  error: null,
  busy: false,
  jobDone: false,
  isLoggedIn: false
})

export const mutations = {
  setUser(state, payload) {
    state.user = payload
  },
  setError(state, payload) {
    state.error = payload
  },
  clearError(state) {
    state.error = null
  },
  setBusy(state, payload) {
    state.busy = payload
  },
  setJobDone(state, payload) {
    state.jobDone = payload
  },
  setIsLoggedIn(state, payload) {
    state.isLoggedIn = payload
  }
}

export const actions = {
  login({ commit }) {
    commit('setIsLoggedIn', true)
  },
  logout({ commit }) {
    commit('setIsLoggedIn', false)
    this.$router.push('/')
  }
}

export const getters = {
  getIsLoggedIn: state => state.isLoggedIn
}
