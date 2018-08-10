<template>
  <div class="demands column">
    <h2>Demands</h2>
    <demand-input />
    <ul class="demands-list list-of-materials">
      <demand-row
        v-for="demand in demands"
        :key="demand.name"
        :demand="demand"
        @remove-demand="removeDemand" />
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DemandInput from "@/components/DemandInput.vue";
import DemandRow from "@/components/DemandRow.vue";
import InventoryItem from "@/game-types/InventoryItem";
import Component from "vue-class-component";
import { State } from "vuex-class";
import { StoreState } from "@/store";
import { DemandsStore } from "@/game-types/RootState";

@Component({
  components: {
    DemandInput,
    DemandRow
  }
})
export default class Demands extends Vue {
  @State(StoreState.demands)
  private demands!: DemandsStore;

  private removeDemand(materialName: string): void {
    Vue.delete(this.demands, materialName);
  }
}
</script>

<style lang="scss" scoped>
</style>
