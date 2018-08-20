<template>
  <div class="requirements column">
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
import MaterialSource from "@/game-types/MaterialSource";
import { mapValues, values, uniq } from "lodash";
import { StoreGetter } from "@/store";
import { RequiredItem } from "@/game-types/RequiredItem";
import { Dictionary } from "vuex";

@Component({
  components: {
    RequirementSourceBlock
  }
})
export default class Requirements extends Vue {
  @Getter(StoreGetter.getActiveRequirements)
  private activeRequirements!: Dictionary<RequiredItem>;

  private get materialSources(): MaterialSource[] {
    return uniq(
      values(
        mapValues(
          this.activeRequirements,
          (r: RequiredItem) => r.material.source
        )
      )
    );
  }
}
</script>
