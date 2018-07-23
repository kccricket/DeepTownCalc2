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
    type="number"></el-input-number>
</span>
</template>

<script lang="ts">
import Vue from 'vue';
import Material from '@/game-types/Material';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'InventoryInput',
  props: {
    materialId: Number,
    material: Object as () => Material,
  },
  computed: {
    isMaterialDemanded(): (material: Material) => boolean {
      return (material): boolean => {
        return this.$store.getters.maybeGetDemandForMaterial(material) !== undefined;
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
        return this.$store.getters.getInventoryItemQuantity(this.materialId);
      },
      set(newQuantity: number): void {
        this.$store.commit('setInventoryItemQuantity', { materialId: this.materialId, newQuantity });
      },
    },
  },
});
</script>

<style lang="sass" scoped>

</style>
