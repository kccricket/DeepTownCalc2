<template>
  <div class="demands column">
    <h2>Demands</h2>
    <demand-input />
    <ul class="demands-list list-of-materials">
      <demand-row
        v-for="demand in activeDemands"
        :key="demand.name"
        :demand="demand" />
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DemandInput from "@/components/DemandInput.vue";
import DemandRow from "@/components/DemandRow.vue";
import InventoryItem from "@/game-types/InventoryItem";
import Component from "vue-class-component";
import { State, Getter } from "vuex-class";
import { StoreState, StoreGetter } from "@/store";
import { DemandsStore } from "@/game-types/RootState";
import { DemandItem } from "@/game-types/DemandItem";

@Component({
  components: {
    DemandInput,
    DemandRow
  }
})
export default class Demands extends Vue {
  @Getter(StoreGetter.getActiveDemands)
  private activeDemands!: DemandsStore;
}
</script>
