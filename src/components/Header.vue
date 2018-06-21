<template>
  <div class="container alert alert-info customAppHeader">
    <div class="customAppHeaderLinkContainer">
      <router-link tag="span" to="/" style="font-weight:bold">Stock Trader</router-link>
      <router-link tag="span" to="/portfolio">Portfolio</router-link>
      <router-link tag="span" to="/stocks">Stocks</router-link>
    </div>
    <div class="customAppHeaderLinkContainer">
      <span>End Day</span>
      <div class="dropdown" :class="{show: isSaveLoadDropdownOpen}" @click="saveLoadDropdownToggle">
        <span class="dropdown-toggle" data-toggle="dropdown">
          Save &amp; Load
        </span>
        <div class="dropdown-menu" :class="{show: isSaveLoadDropdownOpen}">
          <span class="dropdown-item">Save</span>
          <span class="dropdown-item">Load</span>
        </div>
      </div>
      <span style="cursor: default">Funds : {{ funds | floatToLocaleCurrency }}</span>
    </div>
  </div>
</template>

<script>
import filterMixin from "../mixins/filterMixin.js";

export default {
  data() {
    return {
      isSaveLoadDropdownOpen: false
    };
  },
  methods: {
    saveLoadDropdownToggle() {
      this.isSaveLoadDropdownOpen = !this.isSaveLoadDropdownOpen;
    }
  },
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
  margin: 0 5px 0 5px;
}
</style>

