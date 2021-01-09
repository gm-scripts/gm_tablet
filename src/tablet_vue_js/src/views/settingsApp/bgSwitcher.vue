<template lang="">
  <div class="application">
    <Sidebar selected="background"></Sidebar>
  </div>
</template>
<script>
import Sidebar from "./sidebar.vue";
export default {
  name: "Settings",
  components: {
    Sidebar
  }
};
</script>
<style lang="scss">
@import "../../assets/scss/mixins";
@import "../../assets/scss/var";
.application {
  height: 100%;
  font-family: $os-font;
  h1 {
    @include no-margin;
  }
}
</style>
