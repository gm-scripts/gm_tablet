<template>
  <div
    class="display"
    :style="{
      opacity: opacity,
      backgroundImage: backgroundImage,
      backgroundColor: backgroundColor
    }"
  >
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
  computed: {
    backgroundImage() {
      let img = this.$store.getters.backgroundImage;
      console.log(img);
      return `url(${img})`;
    },
    backgroundColor() {
      let col = this.$store.getters.backgroundColor;
      console.log(col);
      return col;
    }
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
<style scoped lang="scss">
@import "../assets/scss/var";
@import "../assets/scss/mixins";

.display {
  user-select: none;
  transition: linear opacity 0.2s;
  background-image: var(--background-image);
  background-color: var(--background-color);
  background-size: cover;
}
</style>
