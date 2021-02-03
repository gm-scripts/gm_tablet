<template>
  <div
    class="bg-sel-outer"
    @click="select"
    :style="{
      '--color': color
    }"
  >
    <div class="img-container">
      <span class="bg-sel-label">{{ label }}</span>
      <div
        class="bg-sel-inner"
        :style="{
          backgroundImage: selectorIcon
        }"
      ></div>
      <div class="hover-overlay"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "bgSelectorIcon",
  data() {
    return {
      selectorIcon: `url("${this.icon}")`
    };
  },
  props: {
    label: String,
    // Write "color" to use a color instead and then use the color prop
    icon: String,
    color: String
  },
  methods: {
    select() {
      this.$store.commit("setBackgroundImage", this.icon);
      this.$store.commit("setBackgroundColor", this.color);
    }
  }
};
</script>
<style lang="scss">
.bg-sel-outer {
  --color: #222222;
  --icon: url("#");
  height: 15vh;
  .img-container {
    overflow: hidden;
    border-radius: 1vh;
    height: 100%;
    width: 100%;
    .bg-sel-label {
      position: absolute;
      top: 1vh;
      left: 2vh;
      z-index: 2;
      font-size: 3vh;
      color: #ffffff;
    }
    position: relative;
    .bg-sel-inner,
    .hover-overlay {
      position: absolute;
      border-radius: 1vh;
      height: 15vh;
    }
    .bg-sel-inner {
      display: block;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      box-sizing: border-box;
      background-color: var(--color);
      background-size: cover;
      transition: transform 0.5s;
    }
    .hover-overlay {
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      height: 15vh;
      background-color: #000000;
      z-index: 1;
      opacity: 0;
      transition: opacity 0.3s;
    }
    &:hover {
      .bg-sel-inner {
        transform: rotate(5deg) scale(1.15);
        transition: transform 0.3s;
      }
      .hover-overlay {
        opacity: 0.4;
        transition: opacity 0.3s;
      }
    }
  }
}
</style>
