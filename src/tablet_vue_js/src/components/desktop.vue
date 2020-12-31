<template>
  <div>
    <div class="apps">
      <AppIcon :iconSrc="settingsApp.icon" :title="settingsApp.title"></AppIcon>
      <AppIcon :iconSrc="settingsApp.icon" :title="settingsApp.title"></AppIcon>
      <AppIcon :iconSrc="settingsApp.icon" :title="settingsApp.title"></AppIcon>
      <AppIcon :iconSrc="settingsApp.icon" :title="settingsApp.title"></AppIcon>
      <AppIcon :iconSrc="settingsApp.icon" :title="settingsApp.title"></AppIcon>
      <AppIcon :iconSrc="settingsApp.icon" :title="settingsApp.title"></AppIcon>
      <AppIcon :iconSrc="settingsApp.icon" :title="settingsApp.title"></AppIcon>
      <AppIcon :iconSrc="settingsApp.icon" :title="settingsApp.title"></AppIcon>
      <AppIcon :iconSrc="settingsApp.icon" :title="settingsApp.title"></AppIcon>
      <AppIcon :iconSrc="settingsApp.icon" :title="settingsApp.title"></AppIcon>
      <AppIcon :iconSrc="settingsApp.icon" :title="settingsApp.title"></AppIcon>
      <AppIcon :iconSrc="settingsApp.icon" :title="settingsApp.title"></AppIcon>
    </div>
  </div>
</template>
<script>
import AppIcon from "./application.vue";
export default {
  name: "Desktop",
  data() {
    return {
      settingsApp: {
        icon: require("../assets/img/settings.jpg"),
        title: "Anwendung"
      }
    };
  },
  components: {
    AppIcon
  }
};
</script>
<style lang="scss">
@import "../assets/scss/var";
.apps {
  width: $tablet-height*1.1655;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;

  position: absolute;
  top: $header-height;
  padding: 3vh 5vh;
}
</style>
