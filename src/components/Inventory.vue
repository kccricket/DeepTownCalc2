<template>
  <div>
    <ul class="inventory">
      <inventory-input
        v-for="material in gameData.materials"
        :key="material.name"
        :material="material"/>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import InventoryInput from "@/components/InventoryInput.vue";
import Material from "@/game-types/Material";
import Component from "vue-class-component";
import { State } from "vuex-class";
import { StoreState } from "@/store";
import { GameDataStore } from "@/game-types/RootState";

@Component({
  components: {
    InventoryInput
  }
})
export default class Inventory extends Vue {
  @State(StoreState.gameData)
  private gameData!: GameDataStore;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0.25em 0;
}
.inventory {
  display: table;
}
.inventory li {
  display: table-row;
  text-align: end;
}
.inventory li > * {
  display: table-cell;
}
</style>
