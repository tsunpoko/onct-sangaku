export const state = () => ({
  kaisoku: []
})

export const mutations = {
  setKaisoku(state, payload) {
    state.kaisoku = payload;
  }
}

export const actions = {
  async fetchKaisoku({ commit }, payload) {
    // commit("setBusy", true)
    // commit("clearError")
    let kaisoku = []
    const db = this.$fireApp.firestore()
    const querySnapshot = await db.collection('kaisoku').orderBy("id").get()
    querySnapshot.forEach(doc => {
      kaisoku.push(doc.data())
    })
    commit("setKaisoku", kaisoku)
  }
}

export const getters = {
  kaisokuAll(state) {
    return state.kaisoku
  }
}
