<template lang="">
  <div class="application">
    <Sidebar selectedItem="none"></Sidebar>
    <DeviceInfo></DeviceInfo>
  </div>
</template>
<script>
import Sidebar from "./settingsApp/sidebar.vue";
import DeviceInfo from "./settingsApp/deviceInfo.vue";
export default {
  name: "Settings",
  components: {
    Sidebar,
    DeviceInfo
  }
};
</script>
<style scoped lang="scss">
@import "../assets/scss/mixins";
@import "../assets/scss/var";
.application {
  height: 100%;
  font-family: $os-font;
  background-color: var(--primary);
  h1 {
    @include no-margin;
  }
}
</style>
