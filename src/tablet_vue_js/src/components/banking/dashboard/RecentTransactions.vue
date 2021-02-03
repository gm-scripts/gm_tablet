<template lang="">
  <div id="recent-transactions">
    <p><span id="sender"></span></p>
    <p><span id=""></span></p>
    <p><span id=""></span></p>
  </div>
</template>
<script>
export default {
  name: "RecentTransactions",
  data() {
    return {
      lang: {
        senderLabel: "Sender",
        receiverLabel: "Receiver",
        amountLabel: "Amount"
      }
    };
  },
  props: {
    sender: String,
    receiver: String,
    amount: Number
  }
};
</script>
<style lang="scss">
#recent-transactions {
  background-color: var(--secondary);
  border-radius: 1vh;
}
</style>
