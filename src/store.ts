import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import InventoryItem from "@/game-types/InventoryItem";
import Material from "@/game-types/Material";
import {
  RootState,
  InventoryStore,
  DemandsStore,
  GameDataStore,
  RequirementsStore
} from "@/game-types/RootState";
import MineArea from "@/game-types/MineArea";
import { Dictionary } from "lodash";
import RequiredItem from "@/game-types/RequiredItem";
import { DemandItem } from "@/game-types/DemandItem";

Vue.use(Vuex);

function addRequirementsForDemand(
  requirementsCollection: RequirementsStore,
  demand: InventoryItem,
  inventory: InventoryStore
): void {
  const requiredComponents = demand.material.components;
  if (requiredComponents) {
    for (const component of requiredComponents) {
      let componentMaterial: Material =
        inventory[component.materialName].material;
      if (!requirementsCollection[component.materialName]) {
        requirementsCollection[component.materialName] = new RequiredItem(
          componentMaterial,
          inventory[component.materialName]
        );
      }
      requirementsCollection[component.materialName].requiredBy.push(
        new DemandItem(demand, requirementsCollection[component.materialName])
      );
      addRequirementsForDemand(
        requirementsCollection,
        {
          material: componentMaterial,
          quantity: demand.quantity * component.quantity
        } as InventoryItem,
        inventory
      );
    }
  }
}

export enum StoreGetter {
  getAllRequirements = "getAllRequirements"
}

export enum StoreMutation {
  setGameData = "setGameData",
  setInventory = "setInventory",
  setInventoryItemQuantity = "setInventoryItemQuantity",
  updateDemand = "updateDemand"
}

export enum StoreState {
  demands = "demands",
  inventory = "inventory",
  gameData = "gameData"
}

export enum StoreAction {
  populateGameData = "populateGameData",
  populateInitialInventory = "populateInitialInventory"
}

export default new Vuex.Store<RootState>({
  state: {
    inventory: {} as InventoryStore,
    demands: {} as DemandsStore,
    gameData: {} as GameDataStore,
    requirements: {} as RequirementsStore
  },
  getters: {
    // maybeGetDemandForMaterial(
    //   state
    // ): (material: Material) => InventoryItem | undefined {
    //   return (material: Material): InventoryItem | undefined => {
    //     return state.demands[material.name];
    //   };
    // },
    // getInventoryItemQuantity(state): (material: Material) => number {
    //   return (material: Material): number => {
    //     return state.inventory[material.name]
    //       ? state.inventory[material.name].quantity
    //       : 0;
    //   };
    // },
    // getDemandQuantity(state): (material: Material) => number {
    //   return (material: Material): number => {
    //     return state.inventory[material.name]
    //       ? state.inventory[material.name].quantity
    //       : 0;
    //   };
    // },
    [StoreGetter.getAllRequirements]: function(state): RequirementsStore {
      const newRequirements: RequirementsStore = {};
      for (const materialName in state.demands) {
        const demand: InventoryItem = state.demands[materialName];
        if (!newRequirements[demand.material.name]) {
          newRequirements[demand.material.name] = new RequiredItem(
            demand.material,
            state.inventory[demand.material.name]
          );
        }

        newRequirements[demand.material.name].requiredBy.push({
          material: demand.material,
          quantity: demand.quantity
        } as InventoryItem);
        addRequirementsForDemand(newRequirements, demand, state.inventory);
      }
      state.requirements = newRequirements;
      return state.requirements;
    }
  },
  mutations: {
    [StoreMutation.setGameData](state, data: GameDataStore): void {
      Vue.set(state, StoreState.gameData, data);
    },
    [StoreMutation.setInventory](state, newInventory: InventoryStore): void {
      Vue.set(state, StoreState.inventory, newInventory);
    },
    [StoreMutation.setInventoryItemQuantity](state, item: InventoryItem): void {
      if (state.inventory[item.material.name])
        Vue.set(state.inventory[item.material.name], "quantity", item.quantity);
      else Vue.set(state.inventory, item.material.name, item);
    },
    [StoreMutation.updateDemand](state, newDemand: InventoryItem): void {
      Vue.set(state.demands, newDemand.material.name, newDemand);
    }
  },
  actions: {
    [StoreAction.populateGameData](context): void {
      const minesData = require("@/data/mines.json") as MineArea[];
      const materialsData = require("@/data/materials.json") as Material[];

      const materials = {} as Dictionary<Material>;
      for (const material of materialsData) {
        Vue.set(materials, material.name, material);
      }

      const mines = new Array<MineArea>();
      for (const mine of minesData) {
        Vue.set(mines, mine.area, mine);
      }

      const newGameData: GameDataStore = {
        materials,
        mines
      };

      context.commit(StoreMutation.setGameData, newGameData);
    },
    [StoreAction.populateInitialInventory](context): void {
      const rawInventory = {} as InventoryStore;
      for (const materialName in context.state.gameData.materials) {
        rawInventory[materialName] = {
          material: context.state.gameData.materials[materialName],
          quantity: 0
        } as InventoryItem;
      }
      context.commit(StoreMutation.setInventory, rawInventory);
    }
  }
} as StoreOptions<RootState>);
