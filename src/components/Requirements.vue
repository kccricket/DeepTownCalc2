<template>
  <ul>
    <requirement-row
      v-for="material in materials"
      :key="material.name"
      :material="material" />
  </ul>

</template>

<script lang="ts">
import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import MaterialsAccessorMixin from "@/mixins/MaterialsAccessorMixin";
import RequirementRow from "@/components/RequirementRow.vue";

@Component({
  components: {
    RequirementRow
  }
})
export default class Requirements extends mixins(MaterialsAccessorMixin) {}
</script>
