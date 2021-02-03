<template>
  <div class="application">
    <div id="dashboard">
      <LongElement
        :label="balElement.balanceLabel"
        :text="balanceText"
      ></LongElement>
      <LongElement
        :label="accNumElement.accNumLabel"
        :text="accNumElement.userAccountNumber"
      ></LongElement>
      <div
        id="invoices"
        :style="{
          border: invoices.border
        }"
      >
        <span class="invoices-text">{{ invoices.text }}</span>
      </div>
      <Header
        :backgroundColor="headerElement.backgroundColor"
        :bankName="headerElement.bankName"
      ></Header>
      <RecentTransactions></RecentTransactions>
    </div>
    <div class="navigation">
      <ControllerIcon
        v-for="item in links"
        :key="item.label"
        :backgroundColor="item.backgroundColor"
        :destination="item.destination"
        :iconPath="item.icon"
        :label="item.label"
      ></ControllerIcon>
    </div>
  </div>
</template>
<script>
import ControllerIcon from "./bankingApp/controllerIcon.vue";
import LongElement from "./bankingApp/longElement.vue";
import Header from "./bankingApp/headerElement.vue";
import RecentTransactions from "./bankingApp/recentTransactions.vue";

export default {
  name: "BankingApp",
  data() {
    return {
      // Make all of those request necessary data from the server
      links: [
        {
          label: "Loans",
          backgroundColor: "#cc3333",
          icon: require("../assets/img/loans.png"),
          destination: "/banking/loans"
        },
        {
          label: "Transfer",
          backgroundColor: "#cc3333",
          icon: require("../assets/img/payments.png"),
          destination: "/banking/transfer"
        },
        {
          label: "invoices",
          backgroundColor: "#cc3333",
          icon: require("../assets/img/invoices.png"),
          destination: "/banking/invoices"
        }
      ],
      balElement: {
        balanceLabel: "Your Balance",
        currency: "$",
        userBalance: 50000000
      },
      accNumElement: {
        userAccountNumber: "123 456",
        accNumLabel: "Account Number"
      },
      unpaidInvoices: false,
      headerElement: {
        bankName: "Maze Bank",
        backgroundColor: "var(--secondary)"
      },
      lastTransaction: {
        sender: "Server",
        receiver: "player",
        amountCurrency: 1500
      }
    };
  },
  components: {
    ControllerIcon,
    LongElement,
    Header,
    RecentTransactions
  },
  computed: {
    balanceText() {
      return `${this.balElement.userBalance}${this.balElement.currency}`;
    },
    invoices() {
      if (this.unpaidInvoices === true) {
        return {
          text: this.lang.invoicesUnpaidText,
          border: "0.8vh solid #cc3322"
        };
      } else {
        return {
          text: this.lang.invoicesPaidText,
          border: "none"
        };
      }
    },
    bankingConfig() {
      let r = Object.assign({}, this.$store.getters.bankingAppConfig);
      return r;
    },
    lang() {
      let r = Object.assign({}, this.bankingConfig.lang);
      r = Object.assign({}, r.dashboard);
      return r;
    }
  },
  watch: {
    bankingConfig(val) {
      this.links[0].label = this.lang.linkLabelLoans;
      this.links[1].label = this.lang.linkLabelTransfer;
      this.links[2].label = this.lang.linkLabelInvoices;

      this.links.forEach((link) => {
        link.backgroundColor = val.bankColor;
      });

      this.balElement.balanceLabel = this.lang.balanceLabel;

      this.accNumElement.accNumLabel = this.lang.accountNumberLabel;
    }
  }
};
</script>
<style scoped lang="scss">
@import "../assets/scss/mixins";
.application {
  height: 100%;
  font-family: avenir, arial, sans-serif;
  background-color: var(--primary);
  #dashboard {
    height: 65%;
    width: 100%;
    box-sizing: border-box;

    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(4, 1fr);

    gap: 4vh;
    padding: 4vh;
    .long-element {
      grid-column: 1 / 4;
    }
    #invoices {
      background-color: var(--secondary);
      border-radius: 1vh;
      font-size: 3vh;
      display: grid;
      place-items: center;
      grid-column: 1 / 4;
      grid-row: 3 / 5;
      .invoices-text {
        text-align: center;
        font-weight: bold;
        color: var(--text-color);
      }
    }
    #header-element {
      grid-column: 4 / 10;
      grid-row: 1 / 3;
    }
    #recent-transactions {
      grid-column: 4 / 10;
      grid-row: 3 / 5;
    }
  }
  .navigation {
    position: absolute;
    --gap: 4vh;
    bottom: calc(var(--gap) / 2);
    left: var(--gap);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: var(--gap);
    width: calc(100% - 2 * var(--gap));
  }
}
</style>
