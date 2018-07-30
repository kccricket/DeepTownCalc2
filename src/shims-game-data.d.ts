import Vue from "vue";
import { StaticGameData } from "@/game-types/StaticGameData";
import Material from "@/game-types/Material";
import RootState from "@/game-types/RootState";

declare module "vue/types/vue" {
  interface Vue {
    readonly $gameData: StaticGameData;
  }
}
