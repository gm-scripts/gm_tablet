import { createRouter, createWebHashHistory } from "vue-router";
import Desktop from "../views/desktop.vue";
import Appearance from "../views/settingsApp/appearancePage.vue";
import Information from "../views/settings-main.vue";
import Banking from "../views/banking.vue";
import Transfer from "../views/bankingApp/transfer.vue";
import Loans from "../views/bankingApp/loans.vue";
import Invoices from "../views/bankingApp/invoices.vue";

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
    component: Information
  },
  {
    path: "/banking",
    name: "Banking",
    component: Banking
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
