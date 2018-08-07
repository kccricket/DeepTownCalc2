import Vue from "vue";
import Material from "@/game-types/Material";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Getter } from "vuex-class";
import { StoreGetter } from "@/store";
import { RequirementsStore } from "@/game-types/RootState";

@Component
export default class MaterialHandlerMixin extends Vue {
  @Prop({ type: Object as () => Material, required: true })
  public material!: Material;

  @Getter(StoreGetter.getAllRequirements)
  private allRequirements!: RequirementsStore;

  public get requiredQuantity(): number {
    return this.allRequirements[this.material.name]
      ? this.allRequirements[this.material.name].quantity
      : 0;
  }
}
