import Vue from 'vue';
import { StaticGameData } from '@/game-types/StaticGameData';

declare module 'vue/types/vue' {
  interface Vue {
    readonly $gameData: StaticGameData;
  }
}
