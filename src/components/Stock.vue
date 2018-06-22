<template>
  <div class="col-sm-6" style="margin-top: 15px">
    <div class="card">
      <div class="card-header" style="font-weight:bold; background-color: rgba(175, 25, 100, 0.30)">
        {{ name | capitalizeName }}
      </div>
      <div class="card-body">
        <h5 class="card-title">Price : {{ price | floatToLocaleCurrency }}</h5>
        <label>Quantity : </label>
        <span v-if="isBuyingAvailable">
          <div class="input-group">
            <input type="text" class="form-control" v-model.number="buyQty" style="width: 75%">
            <span class="input-group-btn">
              <button class="btn btn-primary" style="margin-left: 5px" @click="buyStocks">Buy</button>
            </span>
          </div>
        </span>
        <span v-else>
          <p>{{ sellQty }}</p>
          <br>
          <button class="btn btn-primary" @click="sellStocks">Sell</button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import filterMixin from "../mixins/filterMixin.js";

export default {
  data() {
    return {
      buyQty: 0
    };
  },
  props: ["name", "price", "sellQty"],
  computed: {
    isBuyingAvailable() {
      return this.$route.path === "/stocks";
    }
  },
  methods: {
    buyStocks() {
      if (!this.buyQty) return;

      if (this.$store.getters["user/getUserFunds"] < this.price * this.buyQty)
        return alert("Insufficient Funds !");

      this.$store.dispatch("user/buyStocks", {
        stockName: this.name,
        quantity: this.buyQty,
        price: this.price
      });

      this.buyQty = 0;
    },
    sellStocks() {
      if (!this.sellQty) return;

      this.$store.dispatch("user/sellStocks", {
        stockName: this.name,
        price: this.price,
        quantity: this.sellQty
      });
    }
  },
  mixins: [filterMixin]
};
</script>

<style>
</style>
