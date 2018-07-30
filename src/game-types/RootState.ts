import IDictionary from "@/game-types/IDictionary";
import InventoryItem from "@/game-types/InventoryItem";

interface RootState {
  inventory: IDictionary<InventoryItem>;
  demands: IDictionary<InventoryItem>;
}

export default RootState;
