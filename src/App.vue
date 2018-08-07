<template>
  <div id="app">
    <demands />
    <inventory />
    <requirements />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Inventory from "./components/Inventory.vue";
import Demands from "./components/Demands.vue";
import Requirements from "./components/Requirements.vue";
import Component from "vue-class-component";
import { Action } from "vuex-class";

@Component({
  components: {
    Inventory,
    Demands,
    Requirements
  }
})
export default class App extends Vue {
  @Action("populateGameData")
  private populateGameData!: () => Promise<undefined>;

  @Action("populateInitialInventory")
  private populateInitialInventory!: () => Promise<undefined>;

  created(): void {
    this.populateGameData();
    this.populateInitialInventory();
  }
}
</script>

<style lang="scss" scoped>
</style>
