<template>
  <div class="demands column">
    <h2>Demands</h2>
    <demand-input />
    <ul class="demands-list list-of-materials">
      <demand-row
        v-for="demand in activeDemands"
        :key="demand.name"
        :demand="demand" />
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DemandInput from "@/components/DemandInput.vue";
import DemandRow from "@/components/DemandRow.vue";
import Component from "vue-class-component";
import { Getter } from "vuex-class";
import { StoreGetter } from "@/store";
import { Dictionary } from "vuex";
import { RequiredItem } from "@/game-types/RequiredItem";

@Component({
  components: {
    DemandInput,
    DemandRow
  }
})
export default class Demands extends Vue {
  @Getter(StoreGetter.getActiveDemands)
  private activeDemands!: Dictionary<RequiredItem>;
}
</script>
