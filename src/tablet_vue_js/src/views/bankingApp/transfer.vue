<template>
  <div class="application">
    <SubcategoryHeader
      height="4"
      text="Transfer"
      goto="/banking"
    ></SubcategoryHeader>
  </div>
</template>
<script>
import SubcategoryHeader from "../../components/subcategoryHeader.vue";
export default {
  name: "Transfer",
  components: {
    SubcategoryHeader
  }
};
</script>
<style scoped lang="scss">
.application {
  height: 100%;
  width: 100%;
  background-color: var(--primary);
}
</style>
