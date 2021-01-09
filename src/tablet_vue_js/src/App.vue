<template>
  <button @click="openTabletMsg">Open</button>
  <button @click="closeTabletMsg">Close</button>
  <Frame
    :displayActivationState="display"
    :style="{ opacity: opacity }"
  ></Frame>
</template>

<script>
import Frame from "./components/frame";

export default {
  name: "App",
  components: {
    Frame
  },
  data() {
    return {
      opacity: "0%",
      display: false
    };
  },
  methods: {
    openTabletMsg() {
      postMessage({ openTablet: true });
    },
    closeTabletMsg() {
      postMessage({ openTablet: false });
    },
    openTablet() {
      if (this.$store.getters) {
        this.opacity = "100%";
        setTimeout(() => (this.display = true), 500);
      }
    },
    closeTablet() {
      this.display = false;
      setTimeout(() => (this.opacity = "0%"), 500);
    }
  },
  beforeCreate() {
    this.$store.commit("updateConfig");
  },
  mounted() {
    window.addEventListener("message", event => {
      let item = event.data;

      if (item.openTablet == true) this.openTablet();
      else if (item.openTablet == false) this.closeTablet();
    });
    this.openTabletMsg();
  }
};
</script>

<style lang="scss">
@import "./assets/scss/mixins";
@import "./assets/scss/var";

html,
body {
  @include no-margin;
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #00000080;
}
.frame {
  transition: opacity 0.5s;
}
</style>
