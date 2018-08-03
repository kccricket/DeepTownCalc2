<template>
  <li>{{ material.name }}: {{ requiredQuantity }}  </li>
</template>

<script lang="ts">
import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import MaterialHandlerMixin from "@/mixins/MaterialHandlerMixin";

@Component
export default class RequirementRow extends mixins(MaterialHandlerMixin) {}
</script>
