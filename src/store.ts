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

Vue.use(Vuex);

function addRequirementsForDemand(
  requirementsCollection: RequirementsStore,
  demand: InventoryItem,
  inventory: InventoryStore
): void {
  const demandYield = demand.material.yield || 1;
  const demandUnits = Math.ceil(demand.quantity / demandYield);

  const requiredComponents = demand.material.components;
  if (requiredComponents) {
    for (const component of requiredComponents) {
      // TODO: Move this totalOfMaterial math into a function. OR maybe this math needs to happen to demandUnits?
      var totalOfMaterial: number = requirementsCollection[
        component.materialName
      ]
        ? requirementsCollection[component.materialName].quantity +
          component.quantity * demandUnits
        : component.quantity * demandUnits;

      const requirement = {
        material: inventory[component.materialName].material,
        quantity: Math.max(
          0,
          totalOfMaterial - inventory[component.materialName].quantity
        )
      } as InventoryItem;

      addRequirementsForDemand(requirementsCollection, requirement, inventory);
    }
  }

  const displayDemand = {
    material: demand.material,
    quantity: demandUnits * demandYield
  };

  Vue.set(requirementsCollection, demand.material.name, displayDemand);
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
    gameData: {} as GameDataStore
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
        addRequirementsForDemand(newRequirements, demand, state.inventory);
      }
      return newRequirements;
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
