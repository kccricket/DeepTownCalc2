<template>
  <li
    :class="{
      'material-demanded': isMaterialDemanded,
      'material-demand-satisfied': isDemandSatisfied
    }"
  >
    <label :for="'inventory-'+material.name">{{ material.name }}</label>
    <el-input-number 
      v-model="materialQuantity" 

      :controls="false"
      :id="'inventory-'+material.name"
      :min="0" />
  </li>
</template>

<script lang="ts">
import Vue from "vue";
import Material from "@/game-types/Material";
import InventoryItem from "@/game-types/InventoryItem";

export default Vue.extend({
  name: "InventoryInput",
  props: {
    material: {
      type: Object as () => Material,
      required: true
    }
  },
  computed: {
    isMaterialDemanded(): boolean {
      return (
        this.$store.getters.maybeGetDemandForMaterial(this.material) !==
        undefined
      );
    },
    isDemandSatisfied(): boolean {
      const demand = this.$store.getters.maybeGetDemandForMaterial(
        this.material
      );
      return demand === undefined
        ? false
        : demand.quantity <= this.materialQuantity;
    },
    materialQuantity: {
      get(): number {
        return this.$store.getters.getInventoryItemQuantity(this.material);
      },
      set(quantity: number): void {
        this.$store.commit("setInventoryItemQuantity", {
          material: this.material,
          quantity
        } as InventoryItem);
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.material-demanded {
  background-color: #a60;
}
.material-demand-satisfied {
  background-color: #6a6;
}
</style>
