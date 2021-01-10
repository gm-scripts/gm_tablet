<template lang="">
  <div class="application">
    <Sidebar selectedItem="none"></Sidebar>
  </div>
</template>
<script>
import Sidebar from "./settingsApp/sidebar.vue";
export default {
  name: "Settings",
  components: {
    Sidebar
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
