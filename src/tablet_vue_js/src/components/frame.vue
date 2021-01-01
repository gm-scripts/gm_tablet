<template>
  <div class="frame" @test-event="testMethod">
    <div class="home-btn"></div>
    <div class="camera-outer">
      <div class="camera-inner"></div>
    </div>
    <div class="off-overlay"></div>
    <Display :activationState="displayActivationState"></Display>
  </div>
</template>

<script>
import Display from "./display.vue";

export default {
  name: "Frame",
  props: {
    displayActivationState: Boolean
  },
  methods: {},
  components: {
    Display
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/var";
@import "../assets/scss/mixins";
.frame {
  .off-overlay {
    border-radius: 1px;
    position: absolute;
    left: $tablet-height * 0.088;
    height: $tablet-height * 0.93;
    width: $tablet-height * 1.3;
    background: #000000;
  }
  @include casing($case-color, 0.4vh, 10, false);
  position: relative;

  background-color: $frame-color;
  height: $tablet-height;
  width: $tablet-height * 1.5;

  border-radius: 5vh;
  display: grid;
  place-items: center;

  .home-btn {
    @include casing($frame-color, 0.3vh, 5, true);
    background-color: $frame-color;
    right: 1.1vh;
    border-radius: 50%;
    position: absolute;
    height: 6vh;
    width: 6vh;
  }

  .camera-outer {
    position: absolute;
    left: 2.5vh;
    @include casing(#113322, 0.3vh, 5, true);
    border-radius: 50%;
    display: grid;
    place-items: center;
    .camera-inner {
      @include casing(#112233, 0.3vh, 5, false);
      border-radius: inherit;
    }
  }

  .display {
    border-radius: 1px;
    position: relative;
    left: $tablet-height * -0.012;
    height: $tablet-height * 0.93;
    width: $tablet-height * 1.3;
    background-color: #888888;
  }
}
</style>
