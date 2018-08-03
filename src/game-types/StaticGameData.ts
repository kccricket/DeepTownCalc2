import Material from "@/game-types/Material";
import MineArea from "@/game-types/MineArea";
import IDictionary from "@/game-types/IDictionary";

interface GameData {
  readonly materials: IDictionary<Material>;
  readonly mines: MineArea[];
}

export default GameData;
