<template>
  <li>{{ requirement.material.name }}: {{ requirement.quantity }}{{ " at "+timeString }} </li>
</template>

<script lang="ts">
import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import MaterialHandlerMixin from "@/mixins/MaterialHandlerMixin";
import { Prop } from "vue-property-decorator";
import InventoryItem from "@/game-types/InventoryItem";

@Component
export default class RequirementRow extends Vue {
  @Prop({ type: Object as () => InventoryItem, required: true })
  public requirement!: InventoryItem;

  private get timeString(): string {
    if (!this.requirement.material.time) return "";

    const timespan = require("timespan");

    const span = timespan.fromSeconds(
      this.requirement.quantity *
        (this.requirement.material.time! /
          (this.requirement.material.yield
            ? this.requirement.material.yield!
            : 1))
    );

    return span.toString();
  }
}
</script>
