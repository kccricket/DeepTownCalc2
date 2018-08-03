<template>
  <div>
    <ul class="inventory">
      <inventory-input
        v-for="material in materials"
        :key="material.name"
        :material="material"/>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import InventoryInput from "@/components/InventoryInput.vue";
import Material from "@/game-types/Material";
import RootState from "@/game-types/RootState";
import IDictionary from "@/game-types/IDictionary";

export default Vue.extend({
  name: "Inventory",
  components: {
    InventoryInput
  },
  computed: {
    materials(): IDictionary<Material> {
      return (this.$store.state as RootState).gameData.materials;
    }
  }
});
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
