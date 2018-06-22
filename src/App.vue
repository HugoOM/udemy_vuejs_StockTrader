<template>
  <div id="app" style="margin-top:20px">
    <app-header></app-header>
    <app-toast></app-toast>
    <br>
    <div class="container">
      <transition name="fade" mode="out-in" appear>
            <router-view :key="$route.fullPath"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import appHeader from "./components/Header.vue";
import appHome from "./components/Home.vue";
import appToast from "./components/ToastNotification.vue";

export default {
  components: {
    appHeader,
    appHome,
    appToast
  },
  computed: {
    calloutResponse_LoadAndSave() {
      return this.$store.getters["messages/getLoadAndSave"];
    }
  }
};
</script>

<style>
.fade-enter-active {
  animation: grow 0.5s ease-out forwards;
  overflow: hidden;
}

.fade-leave-active {
  animation: shrink 0.5s ease-out forwards;
  overflow: hidden;
}

@keyframes grow {
  from {
    max-height: 0;
    opacity: 0.25;
  }
  to {
    max-height: 1000px;
  }
}
@keyframes shrink {
  from {
    max-height: 1000px;
  }
  to {
    max-height: 0;
    opacity: 0.25;
  }
}
</style>
