<template>
  <div class="long-element">
    <span class="label">{{ label }} <br /></span>
    <span class="text">{{ text }}</span>
  </div>
</template>
<script>
export default {
  name: "LongElement",
  props: {
    label: String,
    text: String
  }
};
</script>
<style scoped lang="scss">
.long-element {
  background-color: var(--secondary);
  border-radius: 1vh;
  position: relative;
  padding: 1vh;
  box-sizing: border-box;
  .label {
    position: absolute;
    bottom: 0.1vh;
    right: 0.5vh;
    font-size: 1.8vh;
    color: var(--text-color);
  }
  .text {
    font-size: 3vh;
    text-align: center;
    display: inline-block;
    color: var(--text-color);
    margin: 0;
    padding: 0;
    font-weight: bold;
  }
}
</style>
