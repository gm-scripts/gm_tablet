<template>
  <div id="display" :style="{ opacity: opacity }">
    <div id="header">
      <div id="internet-symbol">
        <div id="bar1" class="bar"></div>
        <div id="bar2" class="bar"></div>
        <div id="bar3" class="bar"></div>
      </div>

      <span id="clock">{{ clockHours }}:{{ clockMinutes }}</span>
      <div id="battery-container">
        <img
          src="../assets/img/battery-icon.png"
          alt="420%"
          id="battery-symbol"
        />
      </div>
    </div>
    <div id="desktop"></div>
    <div id="dock"></div>
  </div>
</template>
<script>
export default {
  name: "Display",
  data() {
    return {
      opacity: "0%",
      clockHours: "00",
      clockMinutes: "00"
    };
  },
  props: {
    activationState: Boolean
  },
  watch: {
    "activationState": function(val) {
      this.activation(val);
    }
  },
  methods: {
    updateClock: function() {
      const date = new Date();
      const mins = date.getMinutes();
      this.clockMinutes = mins >= 10 ? mins.toString() : `0${mins}`;
      const hours = date.getHours();
      this.clockHours = hours >= 10 ? hours.toString() : `0${hours}`;
    },
    activation(state) {
      state ?  (this.opacity = "100%") : (this.opacity = "0%");
    }
  },
  created: function() {
    setInterval(() => {
      this.updateClock();
    }, 100);
  }
};
</script>
<style lang="scss">
@import "../assets/scss/var";

#display {
  user-select: none;
  transition: linear opacity 0.2s;
  background-image: url("../assets/img/tablet-bg.png");
  background-color: #ffbb55;
  background-size: cover;

  #header {
    top: 0;
    position: absolute;
    background-color: $header-bg-color;
    height: $header-height;
    width: 100%;
    line-height: $header-height;
    text-align: center;

    #internet-symbol {
      float: left;
      margin-left: 0.2vh;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 0.2vh;
      place-content: bottom;
      width: 3vh;
      height: 100%;
      .bar {
        border-radius: 1px;
        margin-bottom: 5%;
        margin-top: auto;
        width: 0.8vh;
        background-color: $header-el-color;
      }
      #bar1 {
        height: 30%;
      }
      #bar2 {
        height: 60%;
      }
      #bar3 {
        height: 90%;
      }
    }

    #clock {
      position: relative;
      font-size: 2vh;
      font-family: sans-serif;
      bottom: -0.2vh;
      color: $header-el-color;
    }
    #battery-container {
      height: $header-height;
      float: right;
      display: grid;
      place-items: center;
      #battery-symbol {
        margin-right: 0.4vh;
        filter: invert(100%) opacity(75%);
        height: $header-height - 0.8vh;
      }
    }
  }
}
</style>
