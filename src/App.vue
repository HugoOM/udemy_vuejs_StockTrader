<template>
  <div id="app" style="margin-top:20px">
    <app-header></app-header>
    <br><br>
    <div class="container alert" style="border: 0.5px solid lightgray; border-radius: 5px;">
      <router-view></router-view>
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
</style>
