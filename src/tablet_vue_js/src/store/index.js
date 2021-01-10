import { createStore } from "vuex";

export default createStore({
  state: {
    configLoaded: false,
    config: null,
    toggleStates: {
      //false => dark, true => light
      themeSwitch: (() => {
        if (localStorage.getItem("theme") === "light") return true;
        else if (localStorage.getItem("theme") === "dark") return false;
        else console.log("no theme set!");
      })()
    }
  },
  mutations: {
    async updateConfig() {
      this.state.config = await fetch(process.env.BASE_URL + "config.json")
        .then((response) => response.json())
        .then((data) => {
          this.state.configLoaded = true;
          return data;
        });
    },
    toggleTheme() {
      this.state.toggleStates.themeSwitch
        ? (this.state.toggleStates.themeSwitch = false)
        : (this.state.toggleStates.themeSwitch = true);
      console.log(
        `colortheme now is: ${
          this.state.toggleStates.themeSwitch ? "light" : "dark"
        }`
      );
      localStorage.setItem(
        "theme",
        this.state.toggleStates.themeSwitch ? "light" : "dark"
      );
    }
  },
  actions: {},
  modules: {},
  getters: {
    config: (state) => state.config,
    configLoaded: (state) => state.configLoaded,
    toggleStates: (state) => state.toggleStates,
    theme: (state) => (state.toggleStates.themeSwitch ? "light" : "dark"),
    themeState: state => state.toggleStates.themeSwitch
  }
});
