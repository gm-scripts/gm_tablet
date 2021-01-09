import { createStore } from "vuex";

export default createStore({
  state: {
    configLoaded: false,
    config: null
  },
  mutations: {
    async updateConfig() {
      this.state.config = await fetch(process.env.BASE_URL + "config.json")
        .then(response => response.json())
        .then(data => data);
      console.log(this.state.config);
    }
  },
  actions: {},
  modules: {},
  getters: {
    config: state => state.config,
    configLoaded: state => state.loaded,

    appSettingsTitle: state => console.log(state.config)
  }
});
