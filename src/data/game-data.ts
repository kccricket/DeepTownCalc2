import { VueConstructor } from "vue";
import materialsData from "@/data/materials.json";
import minesData from "@/data/mines.json";
import { StaticGameData } from "@/game-types/StaticGameData";
import Material from "@/game-types/Material";
import MaterialSource from "@/game-types/MaterialSource";
import { Seq, Collection } from "immutable";
import MineArea from "@/game-types/MineArea";

export default function GameDataPlugin(Vue: VueConstructor): void {
  const materials: Collection.Keyed<string, Material> = Seq.Keyed(
    materialsData.map(
      (material): [string, Material] => [material.name, material as Material]
    )
  );

  const mines: Collection.Indexed<MineArea> = Seq.Indexed(
    minesData.map((mine): MineArea => mine as MineArea)
  );

  const getMaterialsBySource = (source: MaterialSource) => {
    return materials.filter(m => m.source === source);
  };

  const staticData: StaticGameData = {
    materials,
    mines,
    getMaterialsBySource
  };

  Vue.prototype.$gameData = staticData;
}
