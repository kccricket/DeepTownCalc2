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
  margin: 0 auto;
  max-width: 1200px;
}

.column {
  flex: 1 0 0;
  height: 100vh;
  margin: 0 16px;
  overflow-y: auto;
}

.list-of-materials {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.list-of-materials-item {
  align-items: center;
  display: flex;
  justify-content: flex-end;
  margin: 0.25em 0;
}

.app .el-input-number {
  margin: 0 8px;
  width: 120px;
}

/* stylelint-disable selector-class-pattern */
.material-demanded .el-input__inner {
  background-color: rgb(255, 250, 181);
}

.material-required .el-input__inner {
  background-color: #fcc;
}

.material-requirement-satisfied .el-input__inner {
  background-color: rgb(151, 218, 151);
}
/* stylelint-enable selector-class-pattern */

.demand-input {
  display: flex;

  .el-select {
    flex: 1 0 0;
  }

  .el-input-number {
    flex: 0 0 120px;
  }

  .el-button {
    flex: 0 0 0;
  }
}
</style>
