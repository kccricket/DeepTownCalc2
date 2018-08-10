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

body {
  font-size: 16px;
}

.app {
  display: flex;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
}

.column {
  height: 100vh;
  overflow-y: auto;
  flex: 1 0 0;
  margin: 0 16px;
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

.app .el-input-number {
  margin: 0 8px;
  width: 120px;
}

.material-demanded .el-input__inner {
  background-color: #fcc;
}

.material-demand-satisfied .el-input__inner {
  background-color: #6a6;
}

.demand-input {
  display: flex;

  .el-select {
    flex: 1 0 0;
  }
}

.demand-input {
  .el-input-number {
    flex: 0 0 120px;
  }

  .el-button {
    flex: 0 0 0;
  }
}
</style>
