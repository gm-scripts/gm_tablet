<template>
  <div class="appIcon">
    <router-link :to="triggersApp" class="icon-container">
      <div
        :src="iconSrc"
        class="icon"
        :style="{ backgroundImage: iconImg }"
      ></div
    ></router-link>
    <div class="title">{{ title }}</div>
  </div>
</template>
<script>
export default {
  name: "AppIcon",
  data() {
    return {
      iconImg: `url("${this.iconSrc}")`
    };
  },
  props: {
    triggersApp: String,
    iconSrc: String,
    title: String
  }
};
</script>
<style scoped lang="scss">
@import "../../assets/scss/var";

.appIcon {
  margin-bottom: 2vh;
  display: grid;
  place-items: center;
  .icon-container {
    display: grid;
    place-items: center;
    height: $app-size * 1.1;
    width: $app-size * 1.1;
    .icon {
      box-shadow: 0 0 0 0 20 #00000080;
      height: $app-size;
      width: $app-size;
      background-size: cover;
      border-radius: $app-border-radius;
      transition: transform 0.2s;
    }
    &:hover {
      .icon {
        transform: scale(1.1);
        transition: transform 0.3s;
      }
    }
  }
  .title {
    width: $app-size * 1.5;
    margin-top: 0.5vh;
    text-align: center;
    font-size: 2vh;
    color: $text-color;
    font-family: $os-font;
  }
}
</style>
