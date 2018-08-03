<template>
  <div class="demand-input">
    <el-select
      v-model="newDemand.material"
      filterable
      value-key="name">
      <el-option
        v-for="material in materials"
        :label="material.name"
        :key="material.name"
        :value="material" />
    </el-select>
    <el-input-number
      v-model="newDemand.quantity"
      :controls="false"
      :min="0" />
    <el-button
      :disabled="!inputIsValid"
      icon="el-icon-plus"
      type="primary"
      circle
      @click="addDemand" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Material from "@/game-types/Material";
import InventoryItem from "@/game-types/InventoryItem";
import RootState from "@/game-types/RootState";
import IDictionary from "@/game-types/IDictionary";

export default Vue.extend({
  name: "DemandInput",
  data() {
    return {
      newDemand: {
        material: {} as Material,
        quantity: 0
      } as InventoryItem
    };
  },
  computed: {
    materials(): IDictionary<Material> {
      return (this.$store.state as RootState).gameData.materials;
    },
    inputIsValid(): boolean {
      if (this.newDemand.material && this.newDemand.quantity > 0) return true;
      else return false;
    }
  },
  methods: {
    addDemand(): void {
      this.$store.commit("updateDemand", this.newDemand);
    },
    clearDemandInput(): void {
      this.newDemand = {
        material: {} as Material,
        quantity: 0
      } as InventoryItem;
    }
  }
});
</script>

<style scoped>
</style>
