export const state = () => ({
  yakuin: []
})

export const mutations = {
  setYakuin(state, payload) {
    state.yakuin = payload
  }
}

export const actions = {
  async fetchYakuin({ commit }, payload) {
    let yakuin = []
    const db = this.$fireApp.firestore()
    const querySnapshot = await db.collection("yakuin").orderBy("year").get()
    querySnapshot.forEach(doc => {
      yakuin.push(doc.data())
    })
    yakuin.reverse()
    commit("setYakuin", yakuin)
  }
}

export const getters = {
  yakuinAll(state) {
    return state.yakuin
  }
}
