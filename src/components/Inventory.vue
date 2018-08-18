<template>
  <div class="inventory column">
    <h2>Inventory</h2>
    <ul class="inventory-list list-of-materials">
      <inventory-row
        v-for="material in gameData.materials"
        :key="material.name"
        :material="material"/>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import InventoryRow from "@/components/InventoryRow.vue";
import Material from "@/game-types/Material";
import Component from "vue-class-component";
import { State } from "vuex-class";
import { StoreState } from "@/store";
import { GameDataStore } from "@/game-types/RootState";

@Component({
  components: {
    InventoryRow
  }
})
export default class Inventory extends Vue {
  @State(StoreState.gameData)
  private gameData!: GameDataStore;
}
</script>
