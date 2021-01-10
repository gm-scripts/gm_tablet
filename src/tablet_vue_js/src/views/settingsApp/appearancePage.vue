<template lang="">
  <div class="application">
    <Sidebar selected="appearance"></Sidebar>
    <div class="content">
      <span
        ><ToggleSwitch
          colorOff="#1f1133"
          colorOn="#bbbbbb"
          knobColorOn="#ffffff"
          knobColorOff="#eeeeee"
          sourceSize="3vh"
          toggler="toggleTheme"
          :toggleState="$store.getters.themeState"
        ></ToggleSwitch
      ></span>
    </div>
  </div>
</template>
<script>
import Sidebar from "./sidebar.vue";
import ToggleSwitch from "../../components/toggleSwitch.vue";
export default {
  name: "SettingsTheme",
  components: {
    Sidebar,
    ToggleSwitch
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
  h1 {
    @include no-margin;
  }
  .content {
    position: absolute;
    display: block;
    left: 25vh;
    height: 100%;
    width: 74.4%;
  }
}
</style>
