<template lang="">
  <div class="element">
    <h1>{{ backgroundTitle }}</h1>
    <div class="img-container">
      <BgSelect
        label="Sunrise"
        color="orange"
        :icon="bgSelectSunrisePath"
      ></BgSelect>
      <BgSelect
        label="Blue Flower"
        color="darkblue"
        :icon="bgSelectFlowerPath"
      ></BgSelect>
      <BgSelect label="Green" color="green"></BgSelect>
      <BgSelect label="Blue" color="blue"></BgSelect>
    </div>
  </div>
</template>
<script>
import BgSelect from "./BackgroundSelectorIcon.vue";

export default {
  name: "Settings",
  components: {
    BgSelect
  },
  data() {
    return {
      bgSelectSunrisePath: require("../../../../public/bg/tablet-bg.png"),
      bgSelectFlowerPath: require("../../../../public/bg/tablet-bg-flower.jpg")
    };
  },
  computed: {
    backgroundTitle() {
      return this.$store.getters.settingsLang.backgroundSwitchHeader;
    }
  },
  methods: {}
};
</script>
<style scoped lang="scss">
@import "../../../assets/scss/mixins";
@import "../../../assets/scss/var";
.application {
  height: 100%;
  font-family: $os-font;
  background-color: var(--primary);
  transition: background-color 0.3s;
  h1 {
    @include no-margin;
    color: var(--text-color);
    font-weight: normal;
    font-size: 3vh;
    margin: 4vh 5vh 3vh 1vh;
  }
  .img-container {
    position: relative;
    padding: 1vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.5vh;
    max-height: 50vh;
    overflow: scroll;
    overflow-x: hidden;
  }
}
</style>
