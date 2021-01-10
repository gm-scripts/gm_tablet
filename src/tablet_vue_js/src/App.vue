<template>
  <button @click="openTabletMsg">Open</button>
  <button @click="closeTabletMsg">Close</button>
  <button @click="clearLocalstorage">Reset</button>
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
    },
    clearLocalstorage: () => localStorage.clear(),

    controlTheme() {
      let theme = localStorage.getItem("theme");
      let root = document.documentElement;
      let conf = Object.assign({}, this.$store.getters.config);
      console.log(conf);
      conf = Object.assign({}, conf.general);
      conf = conf.defaultTheme;
      console.log("conf: " + conf);
      //shit

      console.log(`defaultTheme: ${conf}, theme: ${theme}`);
      if (conf === undefined) {
        console.error("Error: config not loaded yet.");
        setTimeout(() => this.controlTheme(), 100);
      } else {
        if (theme === null || theme === undefined) {
          localStorage.setItem("theme", conf);
        } else if (theme === "dark") {
          console.log("setting theme to dark");
          console.log("root: " + root);
          root.style.setProperty("--primary", "#333333");
          root.style.setProperty("--secondary", "#222222");
          root.style.setProperty("--text-color", "#cfcfcf");
          root.style.setProperty("--text-color-hover", "#afafaf");
        } else {
          console.log(theme);
          console.log("setting theme to light");
          root.style.setProperty("--primary", "#eeeeee");
          root.style.setProperty("--secondary", "#aaaaaa");
          root.style.setProperty("--text-color", "#222222");
          root.style.setProperty("--text-color-hover", "#333333");
        }
      }
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
    this.controlTheme();
  },
  computed: {
    theme() {
      return this.$store.getters.theme;
    },
    configLoaded() {
      return this.$store.getters.configLoaded;
    }
  },
  watch: {
    configLoaded: function() {
      console.log("config " + this.configLoaded);
      if (this.$store.getters.configLoaded === true) {
        this.controlTheme();
      }
    },
    theme() {
      console.log("theme changed");
      this.controlTheme();
    }
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
