<template>
  <div id="app">
    <demands/>
    <inventory/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Inventory from "./components/Inventory.vue";
import Demands from "./components/Demands.vue";

export default Vue.extend({
  name: "App",
  components: {
    Inventory,
    Demands
  },
  created(): void {
    this.$store.dispatch("getInitialInventory", this.$gameData.materials);
  }
});
</script>

<style lang="scss" scoped>
</style>
