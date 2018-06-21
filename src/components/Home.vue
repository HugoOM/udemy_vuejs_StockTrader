<template>
  <div>
    <h1>Trade or View your Portfolio</h1>
    <p>You may Save &amp; Load your Data</p>
    <p>Click on 'End Day' to begin a new Day!</p>
    <hr>
    <h3>Your Funds: {{ getUserFunds | floatToLocaleCurrency }}</h3>
  </div>
</template>

<script>
import filterMixin from "../mixins/filterMixin.js";

export default {
  computed: {
    getUserFunds() {
      return this.$store.getters["user/getUserFunds"];
    }
  },
  mixins: [filterMixin]
};
</script>