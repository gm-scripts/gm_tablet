<template>
  <div class="application">
    <div class="content">
      <InfoBlock :info="infos[0].title" :title="infos[0].data"></InfoBlock>
      <InfoBlock :info="infos[1].title" :title="infos[1].data"></InfoBlock>
      <InfoBlock :info="infos[2].title" :title="infos[2].data"></InfoBlock>
    </div>
  </div>
</template>
<script>
import InfoBlock from "../../components/infoBlock.vue";
export default {
  name: "DeviceInfo",
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
  },
  components: {
    InfoBlock
  }
};
</script>
<style scoped lang="scss">
.application {
  position: absolute;
  left: 26vh;
  width: 71vh;
  background-color: transparent;
  .content {
    margin: 3vh;
    display: grid;
    place-items: center;
  }
}
</style>
