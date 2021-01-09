import { createRouter, createWebHashHistory } from "vue-router";
import Desktop from "../views/desktop.vue";
import Settings from "../views/settings-main.vue";
import SettingsTheme from "../views/settingsApp/themePage.vue";
import SettingsBackground from "../views/settingsApp/bgSwitcher.vue";
import Banking from "../views/banking.vue";

const routes = [
  {
    path: "/",
    name: "Desktop",
    component: Desktop
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings
  },
  {
    path: "/settings/theme",
    name: "SettingsTheme",
    component: SettingsTheme
  },
  {
    path: "/settings/background",
    name: "SettingsBackground",
    component: SettingsBackground
  },
  {
    path: "/banking",
    name: "Banking",
    component: Banking
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
