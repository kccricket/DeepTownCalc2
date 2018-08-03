import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import InventoryItem from "@/game-types/InventoryItem";
import Material from "@/game-types/Material";
import IDictionary from "@/game-types/IDictionary";
import RootState from "@/game-types/RootState";
import GameData from "@/game-types/StaticGameData";
import MineArea from "@/game-types/MineArea";
import Getters from "@/store-getters";

Vue.use(Vuex);

function addRequirementsForDemand(
  requirementsCollection: IDictionary<InventoryItem>,
  demand: InventoryItem,
  inventory: IDictionary<InventoryItem>
): void {
  const requiredComponents = demand.material.components;
  if (requiredComponents) {
    for (const component of requiredComponents) {
      var totalOfMaterial: number = requirementsCollection[
        component.materialName
      ]
        ? requirementsCollection[component.materialName].quantity +
          component.quantity * demand.quantity
        : component.quantity * demand.quantity;

      const requirement = {
        material: inventory[component.materialName].material,
        quantity: Math.max(
          0,
          totalOfMaterial - inventory[component.materialName].quantity
        )
      } as InventoryItem;

      // if (requirement.quantity === 0) return;

      addRequirementsForDemand(requirementsCollection, requirement, inventory);
      Vue.set(requirementsCollection, component.materialName, requirement);
    }
  }
}

const store: StoreOptions<RootState> = {
  state: {
    inventory: {} as IDictionary<InventoryItem>,
    demands: {} as IDictionary<InventoryItem>,
    //requirements: {} as IDictionary<InventoryItem>,
    gameData: {} as GameData
  },
  getters: {
    maybeGetDemandForMaterial(
      state
    ): (material: Material) => InventoryItem | undefined {
      return (material: Material): InventoryItem | undefined => {
        return state.demands[material.name];
      };
    },
    getInventoryItemQuantity(state): (material: Material) => number {
      return (material: Material): number => {
        return state.inventory[material.name]
          ? state.inventory[material.name].quantity
          : 0;
      };
    },
    getDemandQuantity(state): (material: Material) => number {
      return (material: Material): number => {
        return state.inventory[material.name]
          ? state.inventory[material.name].quantity
          : 0;
      };
    },
    [Getters.getAllRequirements]: function(state): IDictionary<InventoryItem> {
      const newRequirements: IDictionary<InventoryItem> = {};
      for (const materialName in state.demands) {
        const demand = state.demands[materialName];
        addRequirementsForDemand(newRequirements, demand, state.inventory);
      }
      return newRequirements;
    }
  },
  mutations: {
    setGameData(state, data: GameData): void {
      Vue.set(state, "gameData", data);
    },
    setInventory(state, newInventory: IDictionary<InventoryItem>): void {
      Vue.set(state, "inventory", newInventory);
    },
    setInventoryItemQuantity(state, item: InventoryItem): void {
      if (state.inventory[item.material.name])
        Vue.set(state.inventory[item.material.name], "quantity", item.quantity);
      else Vue.set(state.inventory, item.material.name, item);
    },
    updateDemand(state, newDemand: InventoryItem): void {
      // if (newDemand.material.components) {
      //   for (const component of newDemand.material.components) {
      //     Vue.set(
      //       state.requirements,
      //       component.materialName,
      //       state.gameData.materials[component.materialName]
      //     );
      //   }
      // }
      Vue.set(state.demands, newDemand.material.name, newDemand);
    }
  },
  actions: {
    populateGameData(context): void {
      const minesData = require("@/data/mines.json") as MineArea[];
      const materialsData = require("@/data/materials.json") as Material[];

      const materials = {} as IDictionary<Material>;
      for (const material of materialsData) {
        Vue.set(materials, material.name, material);
      }

      const mines = new Array<MineArea>();
      for (const mine of minesData) {
        Vue.set(mines, mine.area, mine);
      }

      const newGameData: GameData = {
        materials,
        mines
      };

      context.commit("setGameData", newGameData);
    },
    populateInitialInventory(context): void {
      const rawInventory = {} as IDictionary<InventoryItem>;
      for (const materialName in context.state.gameData.materials) {
        rawInventory[materialName] = {
          material: context.state.gameData.materials[materialName],
          quantity: 0
        } as InventoryItem;
      }
      context.commit("setInventory", rawInventory);
    }
  }
};

export default new Vuex.Store<RootState>(store);
