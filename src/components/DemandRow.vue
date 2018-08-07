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
import { Prop, Component } from "vue-property-decorator";
import { Mutation } from "vuex-class";
import { StoreMutation } from "@/store";

@Component
export default class DemandRow extends Vue {
  @Mutation(StoreMutation.updateDemand)
  private updateDemand!: (newDemand: InventoryItem) => void;

  @Prop({
    type: Object as () => InventoryItem,
    required: true
  })
  public demand!: InventoryItem;

  private get demandQuantity(): number {
    return this.demand.quantity;
  }
  private set demandQuantity(quantity: number) {
    this.updateDemand({ ...this.demand, quantity } as InventoryItem);
  }
}
</script>

<style lang="scss" scoped>
</style>
