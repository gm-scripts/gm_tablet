<template lang="">
  <div class="application">
    <Sidebar selected="appearance"></Sidebar>
    <div class="content">
      <div class="element">
        <span
          ><ToggleSwitch
            colorOff="#1f1133"
            colorOn="#bbbbbb"
            knobColorOn="#ffffff"
            knobColorOff="#eeeeee"
            sourceSize="1.75vh"
            toggler="toggleTheme"
            :toggleState="$store.getters.themeState"
            class="toggleswitch"
          ></ToggleSwitch
          ><span class="label">Color Theme</span></span
        >
      </div>
      <hr class="divider" />
      <BgSwitcher></BgSwitcher>
    </div>
  </div>
</template>
<script>
import Sidebar from "./sidebar.vue";
import ToggleSwitch from "../../components/toggleSwitch.vue";
import BgSwitcher from "./bgSwitcher.vue";
export default {
  name: "SettingsTheme",
  components: {
    Sidebar,
    ToggleSwitch,
    BgSwitcher
  }
};
</script>
<style scoped lang="scss">
@import "../../assets/scss/mixins";
@import "../../assets/scss/var";
.application {
  height: 100%;
  font-family: $os-font;
  background-color: var(--primary);
  transition: background-color 0.2s;
  h1 {
    @include no-margin;
  }
  .content {
    position: absolute;
    display: block;
    left: 25vh;
    height: 100%;
    width: 74.4%;
    .element {
      margin: 2vh 3vh 2vh 4vh;
      .toggleswitch {
        float: left;
      }
      .label {
        font-size: 2.5vh;
        line-height: 3.5vh;
        margin: 1vh;
        color: var(--text-color);
      }
    }
    .divider {
      border: none;
      border-bottom: 1px solid var(--secondary);
      margin: 3vh 5vh;
    }
  }
}
</style>
