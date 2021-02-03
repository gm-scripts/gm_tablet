<template>
  <div
    id="header-element"
    :style="{
      backgroundColor: backgroundColor
    }"
  >
    <h1 id="title">{{ bankName }}</h1>
  </div>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    bankName: String
  }
};
</script>
<style lang="scss">
#header-element {
  background-color: var(--secondary);
  border-radius: 1vh;
  position: relative;
  #title {
    margin: 0;
    font-style: italic;
    font-size: 5vh;
    color: var(--text-color);
    position: absolute;
    text-align: center;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
