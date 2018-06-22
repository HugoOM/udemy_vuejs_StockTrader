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
    state.stocks.find(stock => stock.name === payload.stockName).price = payload.price
  },
  setStocksFromDB(state, payload) {
    for (let prop in payload) {
      state[prop] = payload[prop]
    }
  }
}

const actions = {
  updateStockPrices(context, payload) {
    let currentStocks = context.getters['getStocks'];

    /* TODO: Randomize price variation */
    currentStocks.forEach(stock => {
      context.commit('setStockPrice', {
        stockName: stock.name,
        price: stock.price + 10
      })
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
