<template>
  <li
    :class="{
      'material-demanded': isMaterialRequired,
      'material-demand-satisfied': isMaterialRequirementSatisfied
    }"
    class="list-of-materials-item"
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
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Getter, Mutation, State } from "vuex-class";
import { StoreGetter, StoreMutation, StoreState } from "@/store";
import { RequirementsStore, InventoryStore } from "@/game-types/RootState";
import { InputNumber } from "element-ui";

@Component({
  components: {
    "el-input-number": InputNumber
  }
})
export default class InventoryRow extends Vue {
  @Prop({
    type: Object as () => Material,
    required: true
  })
  public material!: Material;

  @Getter(StoreGetter.getAllRequirements)
  private allRequirements!: RequirementsStore;

  @Mutation(StoreMutation.setInventoryItemQuantity)
  private setInventoryItemQuantity!: (payload: InventoryItem) => void;

  @State(StoreState.inventory)
  private inventory!: InventoryStore;

  private get requiredQuantity(): number {
    const requirements: RequirementsStore = this.allRequirements;
    return requirements[this.material.name]
      ? requirements[this.material.name].quantity
      : 0;
  }

  private get isMaterialRequired(): boolean {
    return this.allRequirements[this.material.name] ? true : false;
  }

  private get isMaterialRequirementSatisfied(): boolean {
    return this.isMaterialRequired && this.requiredQuantity === 0;
  }

  private get inventoryQuantity(): number {
    return this.inventory[this.material.name].quantity;
  }

  private set inventoryQuantity(quantity: number) {
    this.setInventoryItemQuantity({
      material: this.material,
      quantity
    } as InventoryItem);
  }
}
</script>

<style lang="scss" scoped>
.material-demanded {
  background-color: #a60;
}
.material-demand-satisfied {
  background-color: #6a6;
}
</style>
