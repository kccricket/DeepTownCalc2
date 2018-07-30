<template>
  <li>
    <span class="demand-name">{{ demand.material.name }}</span>
    <el-input-number
      v-model="demandQuantity"
      :controls="false"
      :id="'demand-'+demand.material.name"
      :min="0"
      class="demand-quantity" />
  </li>
</template>

<script lang="ts">
import Vue from "vue";
import InventoryItem from "@/game-types/InventoryItem";

export default Vue.extend({
  name: "DemandRow",
  props: {
    demand: {
      type: Object as () => InventoryItem,
      required: true
    }
  },
  computed: {
    demandQuantity: {
      get(): number {
        return this.demand.quantity;
      },
      set(quantity: number): void {
        const newDemand = { ...this.demand, quantity };
        this.$store.commit("updateDemand", newDemand);
      }
    }
  }
});
</script>

<style lang="scss" scoped>
</style>
