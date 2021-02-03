<template>
  <div class="controller">
    <div
      class="controller-inner"
      :style="{
        '--shadow-color': `${backgroundColor}80`
      }"
    >
      <div
        class="controller-image"
        :style="{
          backgroundColor: backgroundColor,
          backgroundImage: `url(${iconPath})`
        }"
      >
        <router-link :to="destination" class="controller-link"></router-link>
      </div>
    </div>
    <div class="controller-label">{{ label }}</div>
  </div>
</template>
<script>
export default {
  name: "ControllerIcon",
  props: {
    label: String,
    backgroundColor: String,
    iconPath: String,
    destination: String
  }
};
</script>
<style scoped lang="scss">
@mixin full-size {
  height: 100%;
  width: 100%;
}
.controller {
  .controller-inner {
    --shadow-color: #000000;
    height: 20vh;
    overflow: hidden;
    border-radius: 2vh;
    box-shadow: 0 0.5vh 1vh var(--shadow-color);
    .controller-image {
      @include full-size;
      background-size: auto 85%;
      background-position: center;
      background-repeat: no-repeat;
      position: relative;
      .controller-link {
        position: absolute;
        display: block;
        @include full-size;
        z-index: 1;
      }
    }
    transition: box-shadow 0.5s, transform 0.5s;
  }
  &:hover {
    .controller-inner {
      box-shadow: 0 1vh 3vh var(--shadow-color);
      transform: translateY(-1vh) scale(1.015);
      transition: box-shadow 0.3s, transform 0.3s;
    }
  }
  .controller-label {
    position: relative;
    color: var(--text-color);
    font-size: 2vh;
    top: 0.5vh;
  }
}
</style>
