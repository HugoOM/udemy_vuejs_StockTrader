const state = {
  user: {
    funds: 10000,
    portfolio: {
      microsoft: 0,
      bombardier: 0,
      google: 0,
      enron: 0
    }
  }
}

const getters = {
  getUserFunds(state) {
    return state.user.funds
  },
  getUserPortfolio(state) {
    return state.user.portfolio
  }
}

const mutations = {
  increaseUserOwnedStock(state, payload) {
    state.user.portfolio[payload.stockName] += payload.quantity
  },
  decreaseUserOwnedStock(state, payload) {
    state.user.portfolio[payload.stockName] -= payload.quantity
  },
  decreaseUserFunds(state, payload) {
    state.user.funds -= payload
  },
  increaseUserFunds(state, payload) {
    state.user.funds += payload
  },
  setUserFromDB(state, payload) {
    for (let prop in payload) {
      state[prop] = payload[prop]
    }
  }
}

const actions = {
  buyStocks({
    commit
  }, payload) {
    commit('decreaseUserFunds', payload.price * payload.quantity);
    commit('increaseUserOwnedStock', payload);
  },
  sellStocks({
    commit
  }, payload) {
    commit('increaseUserFunds', payload.price * payload.quantity);
    commit('decreaseUserOwnedStock', payload);
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
