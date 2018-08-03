<template>
  <div class="requirements">
    <requirement-source-block
      v-for="source in materialSources"
      :key="source"
      :source="source" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import RequirementSourceBlock from "@/components/RequirementSourceBlock.vue";
import { Getter } from "vuex-class";
import Getters from "@/store-getters";
import IDictionary from "@/game-types/IDictionary";
import InventoryItem from "@/game-types/InventoryItem";
import MaterialSource from "@/game-types/MaterialSource";
import { mapValues, values, uniq } from "lodash";
import InventoryVue from "@/components/Inventory.vue";

@Component({
  components: {
    RequirementSourceBlock
  }
})
export default class Requirements extends Vue {
  @Getter(Getters.getAllRequirements)
  public allRequirements!: IDictionary<InventoryItem>;

  private get materialSources(): MaterialSource[] {
    return uniq(
      values(
        mapValues(this.allRequirements, (r: InventoryItem) => r.material.source)
      )
    );
  }
}
</script>
