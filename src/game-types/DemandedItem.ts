import QuantifiedMaterial from "@/game-types/QuantifiedMaterial";
import Material from "@/game-types/Material";

// tslint:disable no-empty-interface
export default interface DemandedItem {
  material: Material;
  quantity: number;
}
