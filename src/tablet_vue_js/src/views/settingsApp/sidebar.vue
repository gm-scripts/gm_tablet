<template>
  <div class="sidebar">
    <ul class="navbar">
      <li v-for="tab in tabs" :key="tab.id" class="nav-item">
        <router-link :to="tab.path" class="nav-link">{{
          tab.title
        }}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "sidebar",
  data() {
    let self = this;
    return {
      tabs: {
        theme: {
          title: self.getConfigData("lang").appearanceTitle,
          path: "/settings/appearance",
          id: "theme"
        },
        background: {
          title: self.getConfigData("lang").backgroundTitle,
          path: "/settings/background",
          id: "background"
        }
      }
    };
  },
  props: {
    selectedItem: String
  },
  methods: {
    getConfigData(wantedData) {
      let config = Object.assign({}, this.$store.getters.config);
      let apps = Object.assign({}, config.apps);
      let settings = Object.assign({}, apps.settings);
      let r = Object.assign({}, settings[wantedData]);
      return r;
    }
  }
};
</script>
<style scoped lang="scss">
@import "../../assets/scss/var";
@import "../../assets/scss/mixins";
.sidebar {
  border-right: 1px solid var(--secondary);
  height: 100%;
  width: 25vh;
  position: absolute;
  left: 0;
  .navbar {
    @include no-margin;
    list-style-type: none;
    .nav-item {
      border-bottom: 1px solid var(--secondary);
      padding: 1vh;
      margin: 0 2vh;
      .nav-link {
        text-decoration: none;
        color: var(--text-color);
        transition: color 0.2s;
        font-size: 2.2vh;
        &:hover {
          color: var(--text-color-hover);
          transition: color 0.1s;
        }
        &.router-link-active {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
