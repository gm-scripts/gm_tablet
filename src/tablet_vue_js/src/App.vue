<template>
  <button @click="openTablet">Anzeigen</button>
  <button @click="closeTablet">Verstecken</button>
  <div
    id="container"
    :style="{
      opacity: opacity,
    }"
  >
    <Frame :displayActivationState="display"></Frame>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Frame from "./components/frame.vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      opacity: "100%",
      display: false,
    };
  },
  components: {
    Frame,
  },
  methods: {
    openTablet() {
      this.opacity = "100%";
      setTimeout(() => (this.display = true), 500);
    },
    closeTablet() {
      this.display = false;
      setTimeout(() => (this.opacity = "0%"), 500);
    },
  },
  mounted() {
    window.addEventListener("message", function(event) {
      var item = event.data;

      if (item.openTablet == true) {
        //Funktion die das Tablet öffnet
        this.openTablet();
      }

      if (item.openTablet == false) {
        //Funktion die das Tablet schließt
        this.closeTablet();
      }
    });
    setInterval(this.$emit("yeet"), 1000);
  },
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
#container {
  transition: linear opacity 0.3s;
}
</style>
