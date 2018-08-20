import InventoryItem from "@/game-types/InventoryItem";
import Material from "@/game-types/Material";

export interface DemandInventoryItem extends InventoryItem {
  quantity: number;
  rawQuantity: number;
  unadjustedQuantity: number;
  material: Material;
  isDemanded: boolean;
}
