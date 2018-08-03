<template>
  <div>
    <demand-input />
    <div class="demands-list">
      <demand-row
        v-for="demand in demands"
        :key="demand.name"
        :demand="demand" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DemandInput from "@/components/DemandInput.vue";
import DemandRow from "@/components/DemandRow.vue";
import IDictionary from "@/game-types/IDictionary";
import InventoryItem from "@/game-types/InventoryItem";
import RootState from "@/game-types/RootState";

export default Vue.extend({
  name: "Demands",
  components: {
    DemandInput,
    DemandRow
  },
  computed: {
    demands(): IDictionary<InventoryItem> {
      return (this.$store.state as RootState).demands;
    }
  }
});
</script>

<style lang="scss" scoped>
</style>
