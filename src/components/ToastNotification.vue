<template>
  <div class="container">
    <div class="row justify-content-center align-items-center">
      <transition 
        enter-active-class="animated slideInDown"
        leave-active-class="animated slideOutUp"
        mode="out-in"
        appear>
        <div 
          v-if="saveAndLoadMessage"
          class="col-6 alert" 
          :class="{'alert-success': saveAndLoadMessage.success,'alert-danger': !saveAndLoadMessage.success}"
          >
          <span>{{ saveAndLoadMessage.message }}</span>
          <!-- Issue with vertical centering of the button if not forcing padding to be 0 -->
          <button 
            class="btn float-right" 
            style="padding:0" 
            @click="clearSaveAndLoadMessage">Close</button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    saveAndLoadMessage() {
      return this.$store.getters["messages/getLoadAndSave"];
    }
  },
  methods: {
    clearSaveAndLoadMessage() {
      this.$store.commit("messages/clearSaveAndLoadMessage");
    }
  }
};
</script>

<style scoped>
.alert {
  position: absolute;
  height: 50px;
  z-index: 999;
  opacity: 0.75;
}
</style>
