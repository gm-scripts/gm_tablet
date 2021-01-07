import { createStore } from "vuex";

export default createStore({
  state: {
    config: null
  },
  mutations: {
    updateConfig() {
      fetch(process.env.BASE_URL + "config.json")
        .then(response => response.json())
        .then(data => (this.state.config = data));
      this.config = 5;
    }
  },
  actions: {},
  modules: {},
  getters: {
    config: state => state.config
  }
});
