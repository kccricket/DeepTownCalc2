import { VueConstructor } from "vue";
import materials from "@/data/materials";
import mines from "@/data/mines";
import { StaticGameData } from "@/game-types/StaticGameData";
import MaterialName from "@/game-types/MaterialName";
import Material from "@/game-types/Material";
import MaterialSource from "@/game-types/MaterialSource";

export default function GameDataPlugin(Vue: VueConstructor): void {
  const getMaterialByName = (name: MaterialName): Material | undefined => {
    return materials.find(m => m.name === name);
  };

  const getMaterialsBySource = (source: MaterialSource): Material[] => {
    return materials.filter(m => m.source === source);
  };

  const staticData: StaticGameData = {
    materials,
    mines,
    getMaterialByName,
    getMaterialsBySource
  };

  Vue.prototype.$gameData = staticData;
}
