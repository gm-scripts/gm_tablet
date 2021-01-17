<template>
  <div
    class="switch-outer"
    @click="toggle"
    :style="{
      backgroundColor: css.bg,
      '--source-size': sourceSize
    }"
  >
    <div
      class="switch-inner"
      :style="{
        left: css.left,
        right: css.right,
        backgroundColor: css.fg
      }"
    ></div>
  </div>
</template>
<script>
export default {
  name: "ToggleSwitch",
  data() {
    return {
      state: (() => {
        let themeState = localStorage.getItem("theme");
        if (themeState === "light") return false;
        else if (themeState === "dark") return true;
        else console.error("Error: Unknown themeState.");
      })(),
      css: {
        left: "calc(var(--source-size) * 0.25)",
        right: "calc(var(--source-size) * 1.75)",
        bg: this.colorOff,
        fg: this.knobColor
      }
    };
  },
  props: {
    colorOff: String,
    colorOn: String,

    knobColorOff: String,
    knobColorOn: String,

    sourceSize: String,

    toggler: String,
    toggleState: Boolean
  },
  methods: {
    toggle() {
      this.$store.commit(this.toggler);
      if (this.state === false) {
        this.state = true;
        this.update();
      } else {
        this.state = false;
        this.update();
      }
    },
    update() {
      if (this.state === false) {
        this.css = {
          left: "calc(var(--source-size) * 1.75)",
          right: "calc(var(--source-size) * 0.25)",
          bg: this.colorOn,
          fg: this.knobColorOn
        };
      } else {
        this.css = {
          left: "calc(var(--source-size) * 0.25)",
          right: "calc(var(--source-size) * 1.75)",
          bg: this.colorOff,
          fg: this.knobColorOff
        };
      }
    }
  },
  watch: {
    state() {}
  },
  mounted() {
    this.root = document.documentElement;
    this.update();
  }
};
</script>
<style scoped lang="scss">
.switch-outer {
  --source-size: 1vh;
  position: relative;
  height: calc(var(--source-size) * 2);
  width: calc(var(--source-size) * 3.5);
  border-radius: calc(var(--source-size) * 1);
  transition: all 0.2s;
  .switch-inner {
    position: absolute;
    height: calc(var(--source-size) * 1.5);
    width: calc(var(--source-size) * 1.5);
    background-color: #fff;
    top: calc(var(--source-size) * 0.25);
    left: calc(var(--source-size) * 0.25);
    right: calc(var(--source-size) * 1.75);
    border-radius: 50%;
    transition: all 0.2s;
  }
}
</style>
