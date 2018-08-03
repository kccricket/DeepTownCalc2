import Vue, { ComponentOptions, VueConstructor } from "../../node_modules/vue";
import IDictionary from "@/game-types/IDictionary";
import InventoryItem from "@/game-types/InventoryItem";
import Material from "@/game-types/Material";

const MaterialHandlerMixin = Vue.extend({
  props: {
    material: {
      type: Object as () => Material,
      required: true
    }
  },
  computed: {
    requiredQuantity(): number {
      const requirements: IDictionary<InventoryItem> = this.$store.getters
        .getAllRequirements;
      return requirements[this.material.name]
        ? requirements[this.material.name].quantity
        : 0;
    }
  }
});

export default MaterialHandlerMixin;
