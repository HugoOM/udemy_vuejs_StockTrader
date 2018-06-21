<template>
  <div class="container alert alert-info customAppHeader">
    <div class="customAppHeaderLinkContainer">
      <router-link tag="span" to="/"><b>Stock Trader</b></router-link>
      <router-link tag="span" to="/portfolio">Portfolio</router-link>
      <router-link tag="span" to="/stocks">Stocks</router-link>
    </div>
    <div class="customAppHeaderLinkContainer">
      <span>End Day</span>
      <router-link tag="span" to="/">Save &amp; Load</router-link>
      <span>Funds : {{ funds | floatToLocaleCurrency }}</span>
    </div>
  </div>
</template>

<script>
import filterMixin from "../mixins/filterMixin.js";

export default {
  computed: {
    funds() {
      return this.$store.getters["user/getUserFunds"];
    }
  },
  mixins: [filterMixin]
};
</script>

<style scoped>
.customAppHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  /* overflow: hidden;  */
}

.customAppHeaderLinkContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

span {
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  margin: 5px;
}
</style>

