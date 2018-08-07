<template>
  <div class="demand-input">
    <el-select
      v-model="newDemand.material"
      filterable
      value-key="name">
      <el-option
        v-for="material in gameData.materials"
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
import Component from "vue-class-component";
import { State, Mutation } from "vuex-class";
import { StoreState, StoreMutation } from "@/store";
import { GameDataStore } from "@/game-types/RootState";

@Component
export default class DemandInput extends Vue {
  @Mutation(StoreMutation.updateDemand)
  private updateDemand!: (newDemand: InventoryItem) => void;

  @State(StoreState.gameData)
  private gameData!: GameDataStore;

  private newDemand: InventoryItem = {
    material: {} as Material,
    quantity: 0
  } as InventoryItem;

  private get inputIsValid(): boolean {
    if (this.newDemand.material && this.newDemand.quantity > 0) return true;
    else return false;
  }

  private addDemand(): void {
    this.updateDemand(this.newDemand);
  }

  private clearDemandInput(): void {
    this.newDemand = {
      material: {} as Material,
      quantity: 0
    } as InventoryItem;
  }
}
</script>

<style scoped>
</style>
