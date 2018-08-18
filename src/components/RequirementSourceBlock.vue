<template>
  <div>
    <h3>{{ source }}</h3>
    <ul>
      <requirement-row
        v-for="requirement in requirementsForThisSource"
        :key="requirement.material.name"
        :requirement="requirement" />
    </ul>
  </div> 
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import MaterialSource from "@/game-types/MaterialSource";
import { Getter, State } from "vuex-class";
import { StoreGetter } from "@/store";
import InventoryItem from "@/game-types/InventoryItem";
import { filter, keyBy } from "lodash";
import RequirementRow from "@/components/RequirementRow.vue";
import { RequirementsStore, RootState } from "@/game-types/RootState";
import { RequiredItem } from "@/game-types/RequiredItem";

@Component({
  components: {
    RequirementRow
  }
})
export default class RequirementSourceBlock extends Vue {
  @Getter(StoreGetter.getActiveRequirements)
  private activeRequirements!: RequirementsStore;

  @Prop({ type: String, required: true })
  public source!: MaterialSource;

  private get requirementsForThisSource(): RequiredItem[] {
    return filter(
      this.activeRequirements,
      (r): boolean => r.material.source == this.source
    );
  }
}
</script>
