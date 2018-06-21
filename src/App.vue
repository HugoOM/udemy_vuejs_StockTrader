<template>
  <div id="app" style="margin-top:20px">
    <app-header></app-header>
    <br>
    <div class="container">
      <transition name="fade" mode="out-in">
            <router-view :key="$route.fullPath"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import appHeader from "./components/Header.vue";
import appHome from "./components/Home.vue";

export default {
  components: {
    appHeader,
    appHome
  }
};
</script>

<style>
.fade-enter {
  /* opacity: 0; */
  /* max-height: 0px; */
}

.fade-enter-active {
  /* transition: max-height 1s ease-in;
  overflow: hidden;
  max-height: 500px; */
  animation: grow 0.75s ease-out forwards;
  overflow: hidden;
}

/* .fade-leave {
} */

.fade-leave-active {
  /* transition: max-height 1s;
  overflow: hidden;  animation: grow 2s ease-out forwards;
  max-height: 0px; */
  /* opacity: 0; */
  animation: shrink 0.75s ease-out forwards;
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
