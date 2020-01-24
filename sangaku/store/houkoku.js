export const state = () => ({
  houkoku: []
})

export const mutations = {
  setHoukoku(state, payload) {
    state.houkoku = payload
  }
}

export const actions = {
  async fetchHoukoku({ commit }, payload) {
    let houkoku = []
    const db = this.$fireApp.firestore()
    const querySnapshot = await db.collection("houkoku").orderBy("year").get()
    querySnapshot.forEach(doc => {
      houkoku.push(doc.data())
    })
    houkoku.reverse()
    commit("setHoukoku", houkoku)
  }
}

export const getters = {
  houkokuAll(state) {
    return state.houkoku
  }
}
