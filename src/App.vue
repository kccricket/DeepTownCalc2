<template>
  <div 
    id="app" 
    class="app">

    <inventory />
    <demands />
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

<style lang="scss">
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

.app {
  display: flex;
  justify-content: center;
}

.column {
  height: 100vh;
  overflow-y: auto;
  // flex: 1 0 auto;
  margin: 16px;
}

.list-of-materials {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.list-of-materials-item {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0.25em 0;
}
</style>
