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
import { Dictionary, filter, keyBy } from "lodash";
import { RequiredItem } from "@/game-types/RequiredItem";
import { DemandItem } from "@/game-types/DemandItem";
import { DemandInventoryItem } from "@/game-types/DemandInventoryItem";

Vue.use(Vuex);

class RequirementItem implements InventoryItem {
  public readonly material: Material;
  public readonly quantity: number;
  public readonly displayQuantity: number;

  //public constructor(thing: InventoryItem);
  public constructor(thing: { material: Material; quantity: number }) {
    this.material = thing.material;
    const materialYield: number = thing.material.yield || 1;
    this.quantity = Math.ceil(thing.quantity / materialYield);
    this.displayQuantity = this.quantity * materialYield;
  }
}

function addRequirementsForDemand(
  requirementsCollection: RequirementsStore,
  demand: DemandInventoryItem,
  inventory: InventoryStore
): void {
  const requiredComponents = demand.material.components;
  if (requiredComponents) {
    for (const component of requiredComponents) {
      let componentMaterial: Material =
        inventory[component.materialName].material;
      if (!requirementsCollection[component.materialName]) {
        Vue.set(
          requirementsCollection,
          component.materialName,
          new RequiredItem(componentMaterial, inventory[component.materialName])
        );
      }
      requirementsCollection[component.materialName].requiredBy.push(
        requirementsCollection[demand.material.name]
      );
      addRequirementsForDemand(
        requirementsCollection,
        {
          material: componentMaterial,
          quantity: demand.quantity * component.quantity
        } as DemandInventoryItem,
        inventory
      );
    }
  }
}

function getActiveDemandsFromStore<T extends DemandInventoryItem>(
  store: Dictionary<T>
): Dictionary<T> {
  return keyBy(
    filter(
      store,
      (d: T): boolean => {
        return d.isDemanded;
      }
    ),
    (i: T): string => {
      return i.material.name;
    }
  );
}

export enum StoreGetter {
  getActiveRequirements = "getActiveRequirements",
  getActiveDemands = "getActiveDemands"
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
    [StoreGetter.getActiveDemands](state): DemandsStore {
      return getActiveDemandsFromStore<DemandItem>(state.demands);
    },
    [StoreGetter.getActiveRequirements](state): RequirementsStore {
      return getActiveDemandsFromStore<RequiredItem>(state.requirements);
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
      let newRequirements = {} as RequirementsStore;

      if (!state.demands[newDemand.material.name]) {
        Vue.set(
          state.demands,
          newDemand.material.name,
          new DemandItem(newDemand)
        );
      } else {
        Vue.set(
          state.demands[newDemand.material.name],
          "quantity",
          newDemand.quantity
        );
      }

      // for (const materialName in state.demands) {
      //   const demand = state.demands[materialName];
      //   if (!newRequirements[demand.material.name]) {
      //     newRequirements[demand.material.name] = new RequiredItem(
      //       demand.material,
      //       state.inventory[demand.material.name],
      //       state.demands[demand.material.name]
      //     );
      //   } else {
      //     const rootDemand = newRequirements[
      //       demand.material.name
      //     ].requiredBy.find(
      //       (r): boolean =>
      //         r.material.name == demand.material.name && r instanceof DemandItem
      //     );
      //     if (rootDemand) {
      //       Vue.set(rootDemand, "quantity", demand.quantity);
      //     } else {
      //       newRequirements[demand.material.name].requiredBy.push(
      //         state.demands[demand.material.name]
      //       );
      //     }
      //   }

      //   addRequirementsForDemand(newRequirements, demand, state.inventory);
      // }

      // state.requirements = newRequirements;

      const demand = state.demands[newDemand.material.name];
      if (!state.requirements[demand.material.name]) {
        state.requirements[demand.material.name] = new RequiredItem(
          demand.material,
          state.inventory[demand.material.name],
          state.demands[demand.material.name]
        );
      } else {
        const rootDemand = state.requirements[
          demand.material.name
        ].requiredBy.find(
          (r): boolean =>
            r.material.name == demand.material.name && r instanceof DemandItem
        );
        if (rootDemand) {
          Vue.set(rootDemand, "quantity", demand.quantity);
        } else {
          state.requirements[demand.material.name].requiredBy.push(
            state.demands[demand.material.name]
          );
        }
      }

      addRequirementsForDemand(state.requirements, demand, state.inventory);
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
