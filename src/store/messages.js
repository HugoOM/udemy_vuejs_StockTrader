const state = {
  messages: {
    loadAndSave: null
  }
}

const getters = {
  getLoadAndSave: state => state.messages.loadAndSave
}

const mutations = {
  setLoadAndSaveMessage(state, payload) {
    state.messages.loadAndSave = {
      status: payload.status,
      message: payload.message
    }
  },
  clearSaveAndLoadMessage(state) {
    state.messages.loadAndSave = null;
  }
}

export default {
  state,
  getters,
  mutations
}
