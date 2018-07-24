<template>
  <div>
    <ul class="inventory">
      <li
        v-for="(material, i) in $gameData.materials"
        :key="material.name">
        <inventory-input
          :material-id="i"
          :material="material"></inventory-input>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import InventoryInput from "./InventoryInput.vue";

export default Vue.extend({
  name: "Inventory",
  components: {
    InventoryInput
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
