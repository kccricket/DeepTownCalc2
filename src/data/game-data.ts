import { VueConstructor } from "vue";
import materials from "@/data/materials";
import mines from "@/data/mines";
import { StaticGameData } from "@/game-types/StaticGameData";

export default function GameDataPlugin(Vue: VueConstructor): void {
  const staticData: StaticGameData = {
    materials,
    mines
  };

  Vue.prototype.$gameData = staticData;
}
