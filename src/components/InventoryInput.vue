<template>
  <span>
    <label :for="'inventory-'+material.name">{{ material.name }}</label>
    <el-input-number 
      v-model="materialQuantity"
      :class="{
        'material-demanded': isMaterialDemanded(material),
        'material-demand-satisfied': isDemandSatisfied(material)
      }"
      :id="'inventory-'+material.name"
      type="number"/>
  </span>
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
    isMaterialDemanded(): (material: Material) => boolean {
      return (material): boolean => {
        return (
          this.$store.getters.maybeGetDemandForMaterial(material) !== undefined
        );
      };
    },
    isDemandSatisfied(): (material: Material) => boolean {
      return (material): boolean => {
        const demand = this.$store.getters.maybeGetDemandForMaterial(material);
        return demand === undefined ? false : demand.isSatisfied;
      };
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

<style lang="sass" scoped>

</style>
