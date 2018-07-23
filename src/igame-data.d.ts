import Vue from 'vue';
import { StaticGameData } from './game-data';

declare module 'vue/types/vue' {
    export interface Vue {
        readonly $gameData: StaticGameData;
    }
}
