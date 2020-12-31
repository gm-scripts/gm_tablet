<template>
  <div class="appIcon">
    <img :src="iconSrc" class="icon" />
    <div class="title">{{ title }}</div>
  </div>
</template>
<script>
export default {
  name: "AppIcon",
  data() {
    return {};
  },
  props: {
    triggersApp: String,
    iconSrc: String,
    title: String,
  },
};
</script>
<style lang="scss">
@import "../assets/scss/var";
.appIcon {
  margin-bottom: 2vh;
  display: grid;
  place-items: center;
  .icon {
    height: $app-size;
    width: $app-size;
    border-radius: $app-border-radius;
  }
  .title {
    width: $app-size*1.5;
    margin-top: 0.5vh;
    text-align: center;
    font-size: 2vh;
    color: $text-color;
    font-family: $os-font;
  }
}
</style>
