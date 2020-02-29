export const state = () => ({
  user: null,
  error: null,
  busy: false,
  jobDone: false,
  isLoggedIn: true
  //isLoggedIn: false
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
  }
}

export const actions = {
}

export const getters = {
  getIsLoggedIn: state => state.isLoggedIn
}
