import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Desktop",
    component: () => import("../views/desktop.vue")
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../views/settings.vue")
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
