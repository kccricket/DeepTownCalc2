<template>
  <div>
    <ul class="inventory">
      <li
        v-for="material in materials"
        :key="material.name">
        <inventory-input
          :material="material"/>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import InventoryInput from "@/components/InventoryInput.vue";
import Material from "@/game-types/Material";

export default Vue.extend({
  name: "Inventory",
  components: {
    InventoryInput
  },
  computed: {
    materials(): Material[] {
      return this.$gameData.materials.valueSeq().toArray();
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
