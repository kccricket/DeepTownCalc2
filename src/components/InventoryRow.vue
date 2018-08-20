<template>
  <li
    :class="{
      'material-demanded': isThisMaterialDemanded,
      'material-required': isThisMaterialRequired,
      'material-requirement-satisfied': isThisMaterialRequirementSatisfied
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
import {
  RequirementsStore,
  InventoryStore,
  DemandsStore
} from "@/game-types/RootState";
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

  @Getter(StoreGetter.getActiveRequirements)
  private activeRequirements!: RequirementsStore;

  @Getter(StoreGetter.getActiveDemands)
  private activeDemands!: DemandsStore;

  @Mutation(StoreMutation.setInventoryItemQuantity)
  private setInventoryItemQuantity!: (payload: InventoryItem) => void;

  @State(StoreState.inventory)
  private inventory!: InventoryStore;

  private get isThisMaterialDemanded(): boolean {
    const demand = this.activeDemands[this.material.name];
    return demand ? demand.isDemanded : false;
  }

  private get isThisMaterialRequired(): boolean {
    const requirement = this.activeRequirements[this.material.name];
    return requirement ? requirement.isRequired : false;
  }

  private get isThisMaterialRequirementSatisfied(): boolean {
    const requirement = this.activeRequirements[this.material.name];
    return (
      requirement !== undefined &&
      (requirement.isRequired && requirement.quantity == 0)
    );
  }

  private get inventoryQuantity(): number {
    return this.inventory[this.material.name].quantity;
  }

  private set inventoryQuantity(quantity: number) {
    this.setInventoryItemQuantity({
      material: this.material,
      quantity: quantity ? quantity : 0
    } as InventoryItem);
  }
}
</script>
