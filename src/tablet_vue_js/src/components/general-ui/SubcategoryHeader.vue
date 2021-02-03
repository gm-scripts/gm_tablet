<template>
  <div
    class="sub-category-header"
    :style="{
      '--size': `${height}vh`
    }"
  >
    <div class="back-arrow" @click="goBack">
      <div class="arrow-upper"></div>
      <div class="arrow-lower"></div>
    </div>
    <span class="text-container">
      {{ text }}
    </span>
  </div>
</template>
<script>
export default {
  name: "SubcategoryHeader",
  props: {
    height: String,
    text: String,
    goto: String
  },
  methods: {
    goBack() {
      location.hash = `#${this.goto}`;
    }
  }
};
</script>
<style lang="scss">
@import "../../assets/scss/var";
.sub-category-header {
  --size: 0vh;
  text-align: right;
  .text-container {
    display: inline-block;
    position: relative;
    right: calc(var(--size) / 4);
    color: var(--text-color);
    font-size: 2.5vh;
  }
  height: var(--size);
  line-height: calc(var(--size) * 1.1);
  font-family: $os-font;
  font-size: calc(var(--size) / 2);
  width: 100%;
  border-bottom: 0.01vh solid var(--secondary);
  .back-arrow {
    position: absolute;
    height: var(--size);
    width: var(--size);
    .arrow-upper,
    .arrow-lower {
      height: calc(var(--size) / 2);
      width: calc(var(--size) / 6);
      background-color: var(--text-color);
      border-radius: calc(var(--size) / 12);
      position: relative;
      left: calc(var(--size) / 3);
      top: calc(-0.15 * var(--size));
      transition: background-color 0.3s;
    }
    &:hover {
      .arrow-upper,
      .arrow-lower {
        background-color: var(--text-color-hover);
        transition: background-color 0.2s;
      }
    }
    .arrow-upper {
      transform: translateY(calc(var(--size) / 3.5)) rotate(50deg);
    }
    .arrow-lower {
      transform: rotate(-50deg);
    }
  }
}
</style>
