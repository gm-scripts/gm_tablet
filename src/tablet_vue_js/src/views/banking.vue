<template>
  <div class="application">
    <h1>This is a banking app!</h1>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import "../assets/scss/mixins";
.application {
  display: grid;
  place-items: center;
  height: 100%;
  font-family: avenir, arial, sans-serif;
  background-color: #fff;
  h1 {
    @include no-margin
  }
}
</style>
