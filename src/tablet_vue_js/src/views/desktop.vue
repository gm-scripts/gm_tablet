<template>
  <div>
    <div class="header">
      <div class="internet-symbol">
        <div class="bar bar1"></div>
        <div class="bar bar2"></div>
        <div class="bar bar3"></div>
      </div>

      <span class="clock">{{ clockHours }}:{{ clockMinutes }}</span>
      <div class="battery-container">
        <img
          src="../assets/img/battery-icon.png"
          alt="420%"
          class="battery-symbol"
        />
      </div>
    </div>
    <div class="desktop">
      <div class="apps">
        <AppIcon
          v-for="app in apps"
          :key="app.id"
          :title="app.title"
          :iconSrc="app.icon"
          :triggersApp="app.appPath"
        ></AppIcon>
      </div>
      <div class="dock-container">
        <div class="dock">
          <AppIcon
            class="important-app"
            v-for="app in importantApps"
            :key="app.id"
            :iconSrc="app.icon"
            :triggersApp="app.appPath"
          ></AppIcon>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppIcon from "../components/desktop/AppIcon.vue";
export default {
  name: "Desktop",
  data() {
    let self = this;
    return {
      apps: {
        settings: {
          id: 0,
          title: (() => self.getConfigApp("settings").title)(),
          icon: require("../assets/img/settingsApp.png"),
          appPath: "/settings"
        },
        banking: {
          id: 1,
          title: (() => self.getConfigApp("banking").title)(),
          icon: require("../assets/img/bankingApp.jpg"),
          appName: "banking",
          appPath: "/banking"
        }
      },
      importantApps: {
        settings: {
          id: 0,
          icon: require("../assets/img/settingsApp.png"),
          appName: "settings",
          appPath: "/settings"
        },
        banking: {
          id: 1,
          icon: require("../assets/img/bankingApp.jpg"),
          appName: "banking",
          appPath: "/banking"
        }
      },
      clockHours: "00",
      clockMinutes: "00"
    };
  },
  methods: {
    updateClock() {
      const date = new Date();
      const mins = date.getMinutes();
      this.clockMinutes = mins >= 10 ? mins.toString() : `0${mins}`;
      const hours = date.getHours();
      this.clockHours = hours >= 10 ? hours.toString() : `0${hours}`;
    },
    getConfigApp(appId) {
      let config = Object.assign({}, this.$store.getters.config);
      let apps = Object.assign({}, config.apps);
      let app = Object.assign({}, apps[appId]);
      return app;
    }
  },
  props: {},
  components: {
    AppIcon
  },
  mounted() {
    this.updateClock();
    setInterval(this.updateClock, 100);
  }
};
</script>
<style lang="scss">
@import "../assets/scss/var";
.header {
  top: 0;
  position: absolute;
  background-color: $header-bg-color;
  height: $header-height;
  width: 100%;
  line-height: $header-height;
  text-align: center;
  backdrop-filter: blur(5vh);
  border-bottom: 0.05vh solid rgba(255, 255, 255, 0.15);
  .internet-symbol {
    float: left;
    margin-left: 0.2vh;
    position: relative;
    bottom: 0.1vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 0.2vh;
    place-content: bottom;
    width: 3vh;
    height: 100%;
    .bar {
      border-radius: 1px;
      margin-bottom: 5%;
      margin-top: auto;
      width: 0.8vh;
      background-color: $header-el-color;
    }
    .bar1 {
      height: 30%;
    }
    .bar2 {
      height: 60%;
    }
    .bar3 {
      height: 90%;
    }
  }

  .clock {
    position: relative;
    font-size: 2vh;
    font-family: $os-font;
    bottom: -0.2vh;
    color: $header-el-color;
  }
  .battery-container {
    height: $header-height;
    float: right;
    display: grid;
    place-items: center;
    .battery-symbol {
      margin-right: 0.4vh;
      filter: invert(100%) opacity(75%);
      height: $header-height - 0.8vh;
    }
  }
}
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
