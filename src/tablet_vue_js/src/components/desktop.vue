<template>
  <div>
    <div class="apps">
      <AppIcon v-for="app in apps" :key="app.id" :title="app.title" :iconSrc="app.icon"></AppIcon>
    </div>
  </div>
</template>
<script>
import AppIcon from "./appIcon.vue";
export default {
  name: "Desktop",
  data() {
    return {
      apps: {
        settings: {
          id: 0,
          title: "Settings",
          icon: require("../assets/img/settingsApp.png"),
          appName: "settings"
        },
        banking: {
          id: 1,
          title: "Banking",
          icon: require("../assets/img/bankingApp.jpg"),
          appName: "banking"
        }
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
