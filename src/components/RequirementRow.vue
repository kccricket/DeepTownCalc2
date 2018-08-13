<template>
  <li>{{ requirement.material.name }}: {{ requirement.displayQuantity }}{{ timeString }}</li>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import InventoryItem from "@/game-types/InventoryItem";
import { State } from "vuex-class";
import { StoreState } from "@/store";
import { InventoryStore } from "@/game-types/RootState";
import RequiredItem from "@/game-types/RequiredItem";

@Component
export default class RequirementRow extends Vue {
  @Prop({ type: Object as () => RequiredItem, required: true })
  public requirement!: RequiredItem;

  private get timeString(): string {
    const seconds = this.requirement.getSecondsToMake();
    if (!seconds) return "";

    const insterspell = require("interspell");
    const i1 = new insterspell(seconds * 1000);
    return " at " + i1.toString("condensed");
  }
}
</script>
