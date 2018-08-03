<template>
  <li
    :class="{
      'material-demanded': isMaterialRequired,
      'material-demand-satisfied': isMaterialRequirementSatisfied
    }"
  >
    <label :for="'inventory-'+material.name">{{ material.name }}</label>
    <el-input-number 
      v-model="inventoryQuantity"
      :controls="false"
      :id="'inventory-'+material.name"
      :min="0" />
  </li>
</template>

<script lang="ts">
import Vue from "vue";
import Material from "@/game-types/Material";
import InventoryItem from "@/game-types/InventoryItem";
import RootState from "@/game-types/RootState";
import IDictionary from "@/game-types/IDictionary";
import MaterialHandlingMixin from "@/mixins/requiredQuantity.ts";

export default Vue.extend({
  name: "InventoryInput",
  mixins: [MaterialHandlingMixin],
  props: {
    material: {
      type: Object as () => Material,
      required: true
    }
  },
  computed: {
    requiredQuantity(): number {
      const requirements: IDictionary<InventoryItem> = this.$store.getters
        .getAllRequirements;
      return requirements[this.material.name]
        ? requirements[this.material.name].quantity
        : 0;
    },
    isMaterialRequired(): boolean {
      return this.requiredQuantity ? true : false;
    },
    isMaterialRequirementSatisfied(): boolean {
      if (this.isMaterialRequired) {
        return this.inventoryQuantity >= this.requiredQuantity;
      } else return false;
    },
    inventoryQuantity: {
      get(): number {
        return (this.$store.state as RootState).inventory[this.material.name]
          .quantity;
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
