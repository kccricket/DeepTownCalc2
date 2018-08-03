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
import Vue, { PropOptions } from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import MaterialSource from "@/game-types/MaterialSource";
import { Getter } from "vuex-class";
import Getters from "@/store-getters";
import InventoryItem from "@/game-types/InventoryItem";
import { Dictionary, filter } from "lodash";
import RequirementRow from "@/components/RequirementRow.vue";

@Component({
  components: {
    RequirementRow
  }
})
export default class RequirementSourceBlock extends Vue {
  @Prop({ type: String, required: true })
  public source!: MaterialSource;

  @Getter(Getters.getAllRequirements)
  private allRequirements!: Dictionary<InventoryItem>;

  private get requirementsForThisSource(): InventoryItem[] {
    return filter(
      this.allRequirements,
      r => r.material.source == this.source && r.quantity > 0
    );
  }
}
</script>
