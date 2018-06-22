<template>
  <div class="container">
    <div class="row justify-content-center align-items-center">
      <transition 
        enter-active-class="animated slideInDown"
        leave-active-class="animated slideOutUp"
        appear
      >
        <div class="col-6 alert">
          <span>{{ message }}</span>
          <!-- Issue with vertical centering of the button if not forcing padding to be 0 -->
          <button class="btn float-right" style="padding:0">Close</button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: ["message"]
};
</script>

<style scoped>
.alert {
  position: absolute;
  height: 50px;
  z-index: 999;
  background-color: rgb(177, 30, 55);
  opacity: 0.4;
}
</style>
