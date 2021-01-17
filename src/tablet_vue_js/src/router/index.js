import { createRouter, createWebHashHistory } from "vue-router";
import Desktop from "../views/desktop.vue";
// import Settings from "../views/settings-main.vue";
// import SettingsAppearance from "../views/settingsApp/appearancePage.vue";
// import SettingsBackground from "../views/settingsApp/bgSwitcher.vue";
// import Banking from "../views/banking.vue";

const routes = [
  {
    path: "/",
    name: "Desktop",
    component: Desktop
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../views/settings-main.vue")
  },
  {
    path: "/settings/appearance",
    name: "SettingsAppearance",
    component: () => import("../views/settingsApp/appearancePage.vue")
  },
  {
    path: "/settings/background",
    name: "SettingsBackground",
    component: () => import("../views/settingsApp/bgSwitcher.vue")
  },
  {
    path: "/banking",
    name: "Banking",
    component: () => import("../views/banking.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
