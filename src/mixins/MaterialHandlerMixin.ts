import Vue from "vue";
import IDictionary from "@/game-types/IDictionary";
import InventoryItem from "@/game-types/InventoryItem";
import Material from "@/game-types/Material";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { Getter } from "vuex-class";
import Getters from "@/store-getters";

// const MaterialHandlerMixinProps = Vue.extend({
//   props: {
//     material: {
//       type: Object as () => Material,
//       required: true
//     }
//   }
// });

@Component
export default class MaterialHandlerMixin extends Vue {
  @Prop({ type: Object as () => Material, required: true })
  public material!: Material;

  @Getter(Getters.getAllRequirements)
  private allRequirements!: IDictionary<InventoryItem>;

  public get requiredQuantity(): number {
    return this.allRequirements[this.material.name]
      ? this.allRequirements[this.material.name].quantity
      : 0;
  }
}
