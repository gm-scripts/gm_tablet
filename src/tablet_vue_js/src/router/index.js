import { createRouter, createWebHashHistory } from "vue-router";
import Desktop from "../views/Desktop.vue";
import Appearance from "../views/settings/Appearance.vue";
import Info from "../views/settings/Info.vue";
import Dashboard from "../views/banking/Dashboard.vue";
import Transfer from "../views/banking/Transfer.vue";
import Loans from "../views/banking/Loans.vue";
import Invoices from "../views/banking/Invoices.vue";

const routes = [
  {
    path: "/",
    name: "Desktop",
    component: Desktop
  },
  {
    path: "/settings",
    name: "Appearance",
    component: Appearance
  },
  {
    path: "/settings/info",
    name: "Information",
    component: Info
  },
  {
    path: "/banking",
    name: "Banking",
    component: Dashboard
  },
  {
    path: "/banking/transfer",
    name: "Transfer",
    component: Transfer
  },
  {
    path: "/banking/loans",
    name: "Loans",
    component: Loans
  },
  {
    path: "/banking/invoices",
    name: "Invoices",
    component: Invoices
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
