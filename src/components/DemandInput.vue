<template>
  <div class="demand-input">
    <el-select
      v-model="newDemandMaterial"
      filterable
      value-key="name">
      <el-option
        v-for="material in gameData.materials"
        :label="material.name"
        :key="material.name"
        :value="material" />
    </el-select>
    <!-- <el-cascader
      v-model="newDemand.materialName"
      :options="cascadedMaterials"
      filterable /> -->
    <el-input-number
      v-model="newDemandQuantity"
      :controls="false"
      :min="1" />
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
import { Select, Option, InputNumber, Button, Cascader } from "element-ui";
import MaterialSource from "@/game-types/MaterialSource";
import QuantifiedMaterial from "@/game-types/QuantifiedMaterial";

interface CascadeEntry {
  value: string | Material;
  label: string;
  /* eslint-disable typescript/no-use-before-define */
  children?: CascadeEntry[] /* eslint-enable typescript/no-use-before-define  */;
}

@Component({
  components: {
    "el-select": Select,
    "el-option": Option,
    "el-input-number": InputNumber,
    "el-button": Button,
    "el-cascader": Cascader
  }
})
export default class DemandInput extends Vue {
  @Mutation(StoreMutation.updateDemand)
  private updateDemand!: (newDemand: InventoryItem) => void;

  @State(StoreState.gameData)
  private gameData!: GameDataStore;

  private newDemandMaterial: Material = {} as Material;
  private newDemandQuantity: number = 1;

  private get inputIsValid(): boolean {
    if (this.newDemandMaterial && this.newDemandQuantity > 0) return true;
    else return false;
  }

  private get cascadedMaterials(): CascadeEntry[] {
    let cascaded: CascadeEntry[] = [];
    let sourceOrder: { [index: string]: number } = {};
    let sourceCounter: number = 0;

    for (const materialSource in MaterialSource) {
      sourceOrder[MaterialSource[materialSource]] = sourceCounter;
      cascaded[sourceCounter++] = {
        value: MaterialSource[materialSource],
        label: materialSource,
        children: [] as CascadeEntry[]
      };
    }

    for (const materialName in this.gameData.materials) {
      const material: Material = this.gameData.materials[materialName];
      const sourceIndex: number = sourceOrder[material.source];
      cascaded[sourceIndex].children!.push({
        value: materialName,
        label: materialName
      } as CascadeEntry);
    }

    return cascaded;
  }

  private addDemand(): void {
    this.updateDemand({
      material: this.newDemandMaterial,
      quantity: this.newDemandQuantity
    } as InventoryItem);

    this.clearDemandInput();
  }

  private clearDemandInput(): void {
    this.newDemandMaterial = {} as Material;
    this.newDemandQuantity = 1;
  }
}
</script>
