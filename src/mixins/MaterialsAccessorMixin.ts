import Vue from "vue";
import Component from "vue-class-component";
import { State } from "vuex-class";
import { StoreState } from "@/store";
import { GameDataStore } from "@/game-types/RootState";

@Component
export default class MaterialsAccessorMixin extends Vue {
  @State(StoreState.gameData)
  private gameData!: GameDataStore;
}
