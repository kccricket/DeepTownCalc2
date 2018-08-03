import Vue from "vue";
import Component from "vue-class-component";
import IDictionary from "@/game-types/IDictionary";
import Material from "@/game-types/Material";
import RootState from "@/game-types/RootState";

@Component
export default class MaterialsAccessorMixin extends Vue {
  public get materials(): IDictionary<Material> {
    return (this.$store.state as RootState).gameData.materials;
  }
}
