<template>
  <div class="container">
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
      // if (this.$route.path === "/stocks")
      // return this.$store.getters["stocks/getStocks"];
      // else if (this.$route.path === "/portfolio")
      return this.$store.getters["user/portfolio"];
    }
  },
  components: {
    appStock
  }
};
</script>

<style>
</style>
