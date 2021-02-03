import { createStore } from "vuex";

export default createStore({
  state: {
    configLoaded: false,
    config: {
      general: {
        defaultTheme: "dark",
        defaultBackgroundImage: "/bg/tablet-bg.png",
        defaultBackgroundColor: "#ccbbaa"
      },
      apps: {
        settings: {
          title: "Settings",
          appPath: "/settings",
          lang: {
            appearanceTitle: "Appearance",
            backgroundTitle: "Background image",
            backgroundSwitchHeader: "change Background Image"
          }
        },
        banking: {
          title: "Banking",
          appPath: "/banking",
          bankName: "Maze Bank",
          bankColor: "#cc3333",
          lang: {
            dashboard: {
              linkLabelLoans: "Loans",
              linkLabelTransfer: "Transfer",
              linkLabelInvoices: "Invoices"
            }
          }
        }
      }
    },
    toggleStates: {
      //false => dark, true => light
      themeSwitch: (() => {
        if (localStorage.getItem("theme") === "light") return true;
        else if (localStorage.getItem("theme") === "dark") return false;
        else console.log("no theme set!");
      })()
    },
    backgroundImage: localStorage.getItem("backgroundImage"),
    backgroundColor: localStorage.getItem("backgroundColor")
  },
  mutations: {
    async updateConfig() {
      this.state.config = await fetch(process.env.BASE_URL + "config.json")
        .then(response => response.json())
        .then(data => {
          this.state.configLoaded = true;
          return data;
        });
    },
    toggleTheme() {
      this.state.toggleStates.themeSwitch
        ? (this.state.toggleStates.themeSwitch = false)
        : (this.state.toggleStates.themeSwitch = true);
      localStorage.setItem(
        "theme",
        this.state.toggleStates.themeSwitch ? "light" : "dark"
      );
    },
    setBackgroundImage(state, val) {
      console.log(val);
      localStorage.setItem("backgroundImage", val);
      state.backgroundImage = val;
    },
    setBackgroundColor(state, val) {
      console.log(val);
      localStorage.setItem("backgroundColor", val);
      state.backgroundColor = val;
    }
  },
  actions: {},
  modules: {},
  getters: {
    config: state => state.config,
    configLoaded: state => state.configLoaded,
    toggleStates: state => state.toggleStates,
    theme: state => (state.toggleStates.themeSwitch ? "light" : "dark"),
    themeState: state => state.toggleStates.themeSwitch,
    settingsLang: state => state.config.apps.settings.lang,
    backgroundImage: state => {
      if (
        state.backgroundImage === null ||
        state.backgroundImage === undefined
      ) {
        setTimeout(() => {
          state.backgroundImage = state.config.general.defaultBackgroundImage;
        }, 200);
      }
      return state.backgroundImage;
    },
    backgroundColor: state => {
      if (
        state.backgroundColor === null ||
        state.backgroundColor === undefined
      ) {
        setTimeout(() => {
          state.backgroundColor = state.config.general.defaultBackgroundColor;
        }, 200);
      }
      return state.backgroundColor;
    },
    bankingAppConfig: state => state.config.apps.banking
  }
});
