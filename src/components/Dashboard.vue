<template>
  <div>
      <div class="dsh-row">
        <CardCustom title="Fabrice" price="$22.3k" desc="We're the best"/>
        <CardCustom title="Fabrice" price="$22.3k" desc="We're the best"/>
        <CardCustom title="Fabrice" price="$22.3k" desc="We're the best"/>
      </div>
      <div class="dsh-row">
        <CardCustom title="Fabrice" price="$22.3k" desc="We're the best"/>
        <CardCustom title="Fabrice" price="$22.3k" desc="We're the best"/>
        <CardCustom title="Fabrice" price="$22.3k" desc="We're the best"/>
      </div>
  </div>
</template>

<script>
import CardCustom from "@/custom-elements/CardCustom";

export default {
  name: "Dashboard",
  components: {
    CardCustom,
  }
}
</script>

<style scoped>
  .dsh-row{
    display: flex;
    flex-direction: row;
  }
</style>