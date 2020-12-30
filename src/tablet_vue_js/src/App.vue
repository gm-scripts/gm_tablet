<template>
  <div id="container">
    <Frame></Frame>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Frame from "./components/frame.vue";

export default defineComponent({
  name: "App",
  components: {
    Frame
  }
});
</script>

<style lang="scss">
@import "./assets/scss/mixins";

body,
html {
  background-color: #333333;
  @include no-margin;
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100vw;
}
</style>
