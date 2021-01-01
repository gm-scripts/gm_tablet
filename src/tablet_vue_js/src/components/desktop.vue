<template>
  <div>
    <div class="desktop">
      <div class="apps">
        <AppIcon
          v-for="app in apps"
          :key="app.id"
          :title="app.title"
          :iconSrc="app.icon"
        ></AppIcon>
      </div>
      <div class="dock-container">
        <div class="dock">
          <AppIcon
            class="important-app"
            v-for="app in importantApps"
            :key="app.id"
            :iconSrc="app.icon"
          ></AppIcon>
        </div>
      </div>
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
          appName: "settings",
        },
        banking: {
          id: 1,
          title: "Banking",
          icon: require("../assets/img/bankingApp.jpg"),
          appName: "banking",
        },
      },
      importantApps: {
        settings: {
          id: 0,
          icon: require("../assets/img/settingsApp.png"),
          appName: "settings",
        },
        banking: {
          id: 1,
          icon: require("../assets/img/bankingApp.jpg"),
          appName: "banking",
        },
      },
    };
  },
  props: {},
  components: {
    AppIcon,
  },
};
</script>
<style lang="scss">
@import "../assets/scss/var";
.apps {
  width: $tablet-height * 1.1655;
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;

  position: absolute;
  top: $header-height;
  padding: 3vh 5vh;
}
.dock-container {
  position: absolute;
  bottom: 1vh;
  display: grid;
  place-items: center;
  width: 100%;
  .dock {
    border-radius: $app-border-radius * 1.1;
    height: $app-size * 1.1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #ffffff00;
    backdrop-filter: blur(20vh);
    .important-app {
      .title {
        display: none;
      }
    }
  }
}
</style>
