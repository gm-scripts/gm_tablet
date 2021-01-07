<template>
  <div class="display" :style="{ opacity: opacity }">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Display",
  components: {},
  data() {
    return {
      opacity: "0%"
    };
  },
  props: {
    activationState: Boolean
  },
  watch: {
    activationState: function(val) {
      this.activation(val);
    }
  },
  methods: {
    activation(state) {
      state ? (this.opacity = "100%") : (this.opacity = "0%");
    }
  },
  created() {
    this.activation(this.activationState);
  }
};
</script>
<style lang="scss">
@import "../assets/scss/var";
@import "../assets/scss/mixins";

.display {
  user-select: none;
  transition: linear opacity 0.2s;
  background-image: url("../assets/img/tablet-bg.png");
  background-color: #ffbb55;
  background-size: cover;
}
</style>
