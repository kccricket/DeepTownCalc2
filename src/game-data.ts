import _Vue from 'vue';
import materials from '@/materials';
import mines from '@/mines';
import Material from '@/game-types/Material';

export interface StaticGameData {
  materials: Material[];
  mines: object[];
}

export function DeepTownGameDataPlugin(Vue: typeof _Vue): void {
  const staticData: StaticGameData = {
    materials,
    mines,
  };

  Vue.prototype.$gameData = staticData;
}
