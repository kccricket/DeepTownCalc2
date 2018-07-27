import Material from "@/game-types/Material";
import MaterialSource from "@/game-types/MaterialSource";
import { Collection } from "../../node_modules/immutable";
import MineArea from "@/game-types/MineArea";

export interface StaticGameData {
  readonly materials: Collection.Keyed<string, Material>;
  readonly mines: Collection.Indexed<MineArea>;
  readonly getMaterialsBySource: (
    source: MaterialSource
  ) => Collection.Keyed<string, Material>;
}
