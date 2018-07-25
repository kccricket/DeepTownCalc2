<template>
  <div>
    <demand-input />
    <div class="demand-list"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DemandInput from "./DemandInput.vue";

export default Vue.extend({
  name: "Demands",
  components: {
    DemandInput
  }
});
</script>

<style lang="scss" scoped>
</style>
