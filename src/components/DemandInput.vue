<template>
  <div class="demand-input">
    <el-select
      v-model="selc"
      filterable
      value-key="name">
      <el-option
        v-for="material in materials"
        :label="material.name"
        :key="material.name"
        :value="material.name"/>
    </el-select>
    <el-input-number
      v-model="numb"/>
    <el-button
      type="primary"
      icon="el-icon-plus"
      circle/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Material from "@/game-types/Material";

export default Vue.extend({
  name: "DemandInput",
  data() {
    return {
      numb: 0,
      selc: ""
    };
  },
  computed: {
    materials(): Material[] {
      return this.$gameData.materials.valueSeq().toArray();
    }
  }
});
</script>

<style scoped>
</style>
