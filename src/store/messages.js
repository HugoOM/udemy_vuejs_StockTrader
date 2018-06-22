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
      success: payload.success,
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
