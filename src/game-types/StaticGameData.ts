import Material from "@/game-types/Material";
import MaterialName from "@/game-types/MaterialName";
import MaterialSource from "@/game-types/MaterialSource";

export interface StaticGameData {
  readonly materials: Material[];
  readonly mines: object[];
  readonly getMaterialByName: (name: MaterialName) => Material | undefined;
  readonly getMaterialsBySource: (source: MaterialSource) => Material[];
}
