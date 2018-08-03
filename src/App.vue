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

export default Vue.extend({
  name: "App",
  components: {
    Inventory,
    Demands,
    Requirements
  },
  created(): void {
    this.$store.dispatch("populateGameData");
    this.$store.dispatch("populateInitialInventory");
  }
});
</script>

<style lang="scss" scoped>
</style>
