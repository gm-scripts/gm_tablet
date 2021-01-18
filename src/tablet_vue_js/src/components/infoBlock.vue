<template>
  <div class="infoblock">
    <span class="title">{{ title }}</span
    ><span class="info">{{ info }}</span>
  </div>
</template>
<script>
export default {
  name: "InfoBlock",
  props: {
    title: String,
    info: String
  }
};
</script>
<style scoped lang="scss">
.infoblock {
  position: relative;
  width: 60vh;
  background-color: var(--trinary);
  padding: 1.75vh;
  height: 2.5vh;
  font-size: 2.5vh;
  color: var(--text-color);
  border-bottom: 1px solid var(--secondary);
  border-right: 1px solid var(--secondary);
  border-left: 1px solid var(--secondary);
  &:first-child {
    border-top: 1px solid var(--secondary);
    border-radius: 2.5vh 2.5vh 0 0;
  }
  &:last-child {
    border-radius: 0 0 2.5vh 2.5vh;
  }
  .title {
    font-weight: bold;
    position: absolute;
    left: 1.75vh;
  }
  .info {
    position: absolute;
    right: 1.75vh;
  }
}
</style>
