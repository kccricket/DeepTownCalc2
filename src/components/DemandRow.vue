<template>
  <li class="list-of-materials-item">
    <span
      class="demand-name">{{ demand.material.name }}</span>
    <el-input-number
      v-model="demandQuantity"
      :controls="false"
      :id="'demand-'+demand.material.name"
      :min="0"
      class="demand-quantity" />
    <el-button 
      icon="el-icon-delete"
      type="danger"
      circle
      @click="removeDemand" />

  </li>
</template>

<script lang="ts">
import Vue from "vue";
import InventoryItem from "@/game-types/InventoryItem";
import { Prop, Component } from "vue-property-decorator";
import { Mutation } from "vuex-class";
import { StoreMutation } from "@/store";
import { InputNumber, Button } from "element-ui";

@Component({
  components: {
    "el-input-number": InputNumber,
    "el-button": Button
  }
})
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
    this.updateDemand({
      ...this.demand,
      quantity: quantity ? quantity : 1
    } as InventoryItem);
    this.$emit("update-demand-quantity", this.demand);
  }

  private removeDemand(): void {
    this.updateDemand({ ...this.demand, quantity: 0 } as InventoryItem);
    this.$emit("remove-demand", this.demand);
  }
}
</script>
