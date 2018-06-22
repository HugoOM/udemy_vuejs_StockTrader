<template>
  <div class="container alert alert-info customAppHeader">
    <div class="customAppHeaderLinkContainer">
      <router-link tag="span" to="/" style="font-weight:bold">Stock Trader</router-link>
      <router-link tag="span" to="/portfolio">Portfolio</router-link>
      <router-link tag="span" to="/stocks">Stocks</router-link>
    </div>
    <div class="customAppHeaderLinkContainer">
      <span @click="endDay">End Day</span>
      <div class="dropdown" :class="{show: isSaveLoadDropdownOpen}" @mouseover="saveLoadDropdownToggle" @mouseout="saveLoadDropdownToggle">
        <span class="dropdown-toggle" data-toggle="dropdown">
          Save &amp; Load
        </span>
        <div class="dropdown-menu" :class="{show: isSaveLoadDropdownOpen}" style="cursor: pointer">
          <a class="dropdown-item" @click="saveCompleteStateToDatabase">Save</a>
          <a class="dropdown-item" @click="loadCompleteStateFromDatabase">Load</a>
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
    },
    endDay() {
      this.$store.dispatch("stocks/updateStockPrices");
    },
    saveCompleteStateToDatabase() {
      this.$http.put("data.json", this.$store.state).then(
        response => {
          this.$store.commit("messages/setLoadAndSaveMessage", {
            success: response.ok,
            message: "Session Saved Successfuly"
          });
        },
        error => {
          this.$store.commit("messages/setLoadAndSaveMessage", {
            success: false,
            message: error.message
          });
        }
      );
    },
    loadCompleteStateFromDatabase() {
      /* State Hydration from Firebase DB */
      this.$http.get("data.json").then(
        response => {
          this.$store.commit("user/setUserFromDB", response.body.user);
          this.$store.commit("stocks/setStocksFromDB", response.body.stocks);

          this.$store.commit("messages/setLoadAndSaveMessage", {
            success: response.ok,
            message: "Session Loaded Successfuly"
          });
        },
        error => {
          this.$store.commit("messages/setLoadAndSaveMessage", {
            success: false,
            message: error.message
          });
        }
      );
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

