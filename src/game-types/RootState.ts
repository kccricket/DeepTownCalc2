import IDictionary from "@/game-types/IDictionary";
import InventoryItem from "@/game-types/InventoryItem";
import GameData from "@/game-types/StaticGameData";

interface RootState {
  inventory: IDictionary<InventoryItem>;
  demands: IDictionary<InventoryItem>;
  gameData: GameData;
}

export default RootState;
