export const state = () => ({
  kaiin: [],
  belongs: []
})

export const mutations = {
  setKaiin(state, payload) {
    state.kaiin = payload
  },
  setBelongs(state, payload) {
    state.belongs = payload
  }
}

export const actions = {
  async fetchKaiin({ commit }) {
    let kaiin = []
    const db = this.$fireApp.firestore()
    const querySnapshot = await db.collection('kaiin').get()
    querySnapshot.forEach(doc => {
      kaiin.push(doc.data())
    })
    commit("setKaiin", kaiin)
  },
  async fetchBelongs({ commit }) {
    let belongs = []
    const db = this.$fireApp.firestore()
    const querySnapshot = await db.collection('belongs').get()
    querySnapshot.forEach(doc => {
      belongs.push(doc.data())
    })
    commit("setBelongs", belongs)
  }
}

export const getters = {
  kaiinAll(state) {
    return state.kaiin
  },
  belongsAll(state) {
    return state.belongs
  }
}
