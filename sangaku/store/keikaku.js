export const state = () => ({
  keikaku: []
})

export const mutations = {
  setKeikaku(state, payload) {
    state.keikaku = payload
  }
}

export const actions = {
  async fetchKeikaku({ commit }, payload) {
    let keikaku = []
    const db = this.$fireApp.firestore()
    const querySnapshot = await db.collection("keikaku").orderBy("id").get()
    querySnapshot.forEach(doc => {
      keikaku.push(doc.data())
    })
    commit("setKeikaku", keikaku)
  }
}

export const getters = {
  keikakuAll(state) {
    return state.keikaku
  }
}
