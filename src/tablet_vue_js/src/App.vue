<template>
  <!--  DEV  -->
  <button @click="openTabletMsg">Open</button>
  <button @click="closeTabletMsg">Close</button>
  <button @click="clearLocalstorage">Reset</button>

  <Frame
    :displayActivationState="display"
    :style="{ opacity: opacity, transform: transform }"
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
      transform: "rotate3d(1, 0, 0, 45deg) translateY(30vh) scale(0.8)",
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
      this.opacity = "100%";
      this.transform = "rotate3d(1, 0, 0, 0deg) translateY(0vh) scale(1)";
      setTimeout(() => (this.display = true), 1000);
    },
    closeTablet() {
      this.display = false;
      this.$store.commit("updateConfig");
      setTimeout(() => {
        this.opacity = "0%";
        this.transform = "rotate3d(1, 0, 0, 45deg) translateY(30vh) scale(0.8)";
      }, 1000);
    },
    clearLocalstorage: () => localStorage.clear(),

    controlTheme() {
      let theme = localStorage.getItem("theme");
      let root = document.documentElement;
      let conf = Object.assign({}, this.$store.getters.config);
      conf = Object.assign({}, conf.general);
      conf = conf.defaultTheme;

      if (conf === undefined) {
        console.error("Error: config not loaded yet.");
        setTimeout(() => this.controlTheme(), 100);
      } else {
        if (theme === null || theme === undefined) {
          localStorage.setItem("theme", conf);
        } else if (theme === "dark") {
          // dark theme
          root.style.setProperty("--primary", "#333333");
          root.style.setProperty("--secondary", "#666666");
          root.style.setProperty("--secondary-hover", "#888888");
          root.style.setProperty("--trinary", "#444444");
          root.style.setProperty("--text-color", "#f8f8f8");
          root.style.setProperty("--text-color-hover", "#afafaf");
          root.style.setProperty("--scrollbar-color", "#dfdfdf7f");
          root.style.setProperty("--scrollbar-color-hover", "#ffffff7f");
        } else {
          // light theme
          root.style.setProperty("--primary", "#eeeeee");
          root.style.setProperty("--secondary", "#aaaaaa");
          root.style.setProperty("--secondary-hover", "#777777");
          root.style.setProperty("--trinary", "#dddddd");
          root.style.setProperty("--text-color", "#222222");
          root.style.setProperty("--text-color-hover", "#777777");
          root.style.setProperty("--scrollbar-color", "#3333333f");
          root.style.setProperty("--scrollbar-color-hover", "#2222223f");
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
    this.controlTheme();

    //DEV
    this.openTabletMsg();

    window.addEventListener("keydown", event => {
      if (event.keyCode == 27) {
        this.closeTabletMsg();
        fetch("https://tablet/exit", {
          method: "post"
        });
      }
    });
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
      if (this.$store.getters.configLoaded === true) {
        this.controlTheme();
      }
    },
    theme() {
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
  overflow: hidden;
  width: 100vw;

  perspective: 250vh;

  //DEV
  background-color: #00000080;
}
.frame {
  opacity: 0;
  transition: opacity 1s, transform 1s;
}
::-webkit-scrollbar {
  width: 1vh;
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: var(--scrollbar-color);
  border-radius: 0.5vh;
  &:hover {
    background-color: var(--scrollbar-color-hover);
  }
}
</style>
