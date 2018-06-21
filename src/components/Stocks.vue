<template>
  <div class="container alert" style="border: 0.5px solid lightgray; border-radius: 5px;">
    <div class="row justify-content-sm-center">
      <app-stock v-for="(stock, index) in stocks" 
        :key="index" 
        :name="stock.name" 
        :price="stock.price"
        :sellQty="stock.quantity"
      ></app-stock>
    </div>
  </div>
</template>

<script>
import appStock from "./stock.vue";

export default {
  computed: {
    stocks() {
      let stocks = this.$store.getters["stocks/getStocks"];

      if (this.$route.path === "/stocks") return stocks;

      /* Route = Portfolio */
      let portfolio = this.$store.getters["user/getUserPortfolio"];

      let ownedStocks = stocks.map(stock => {
        return {
          name: stock.name,
          price: stock.price,
          quantity: portfolio[stock.name]
        };
      });

      return ownedStocks;
    }
  },
  components: {
    appStock
  }
};
</script>

<style>
</style>  
