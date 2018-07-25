<template>
  <div class="demand-input">
    <el-select
      v-model="selc"
      filterable
      value-key="name">
      <el-option
        v-for="material in $gameData.materials"
        :label="material.name"
        :key="material.name"
        :value="material"/>
    </el-select>
    <el-input-number
      v-model="numb"/>
  </div>
</template>

<script lang="ts">
export default {
  name: "DemandInput",
  data() {
    return {
      numb: 0,
      selc: ""
    };
  }
};
</script>

<style scoped>
</style>
