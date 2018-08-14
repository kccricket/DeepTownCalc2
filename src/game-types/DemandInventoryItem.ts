import InventoryItem from "@/game-types/InventoryItem";
import Material from "@/game-types/Material";

export interface DemandInventoryItem extends InventoryItem {
  quantity: number;
  material: Material;
  isDemanded: boolean;
}
