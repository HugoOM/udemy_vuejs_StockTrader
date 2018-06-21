const state = {
  stocks: [{
      name: "enron",
      price: 250
    },
    {
      name: "bombardier",
      price: 170
    },
    {
      name: "google",
      price: 400
    },
    {
      name: "microsoft",
      price: 375
    }
  ]

}

const getters = {
  getStocks(state) {
    return state.stocks
  }
}

const mutations = {
  setStockPrice(state, payload) {
    state[payload.stockName].price = payload.quantity
  },
  addStock(state, payload) {
    if (state[payload.stockName]) return; /* Throw Error ? */

    state[payload.stockName] = {
      price: payload.price
    }
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
