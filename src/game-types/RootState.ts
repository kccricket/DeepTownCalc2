import InventoryItem from "@/game-types/InventoryItem";
import { Dictionary } from "lodash";
import Material from "@/game-types/Material";
import MineArea from "@/game-types/MineArea";
import RequiredItem from "@/game-types/RequiredItem";

export type InventoryStore = Dictionary<InventoryItem>;
export type DemandsStore = InventoryStore;
export type RequirementsStore = Dictionary<RequiredItem>;

export interface GameDataStore {
  readonly materials: Dictionary<Material>;
  readonly mines: MineArea[];
}

export interface RootState {
  inventory: InventoryStore;
  demands: DemandsStore;
  gameData: GameDataStore;
}
