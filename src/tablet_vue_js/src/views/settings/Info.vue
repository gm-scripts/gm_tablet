<template lang="">
  <div class="application">
    <Sidebar selectedItem="none"></Sidebar>
    <div class="content">
      <InfoBlock :info="infos[0].data" :title="infos[0].title"></InfoBlock>
      <InfoBlock :info="infos[1].data" :title="infos[1].title"></InfoBlock>
      <InfoBlock :info="infos[2].data" :title="infos[2].title"></InfoBlock>
    </div>
  </div>
</template>
<script>
import Sidebar from "../../components/settings/Sidebar.vue";
import InfoBlock from "../../components/general-ui/InfoBlock.vue";

export default {
  name: "Info",
  components: {
    Sidebar,
    InfoBlock
  },

  data() {
    return {
      infos: [
        {
          title: "Software",
          data: "GM-OS"
        },
        {
          title: "Version",
          data: "INDEV"
        },
        {
          title: "Hersteller",
          data: "GM-Scripts"
        }
      ]
    };
  }
};
</script>
<style scoped lang="scss">
@import "../../assets/scss/mixins";
@import "../../assets/scss/var";
.application {
  position: absolute;
  height: 100%;
  font-family: $os-font;
  background-color: var(--primary);
  .content {
    box-sizing: border-box;
    position: absolute;
    margin-top: 3vh;
    display: grid;
    place-items: center;
    width: 74.4%;
    left: 25vh;
  }
}
</style>
