import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import InventoryItem from "@/game-types/InventoryItem";
import Material from "@/game-types/Material";
import IDictionary from "@/game-types/IDictionary";
import RootState from "@/game-types/RootState";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    inventory: {} as IDictionary<InventoryItem>,
    demands: new Array<InventoryItem>()
  },
  getters: {
    maybeGetDemandForMaterial(
      state
    ): (material: Material) => InventoryItem | undefined {
      return (material: Material): InventoryItem | undefined => {
        return state.demands.find(
          (d: InventoryItem): boolean => d.material.name === material.name
        );
      };
    },
    getInventoryItemQuantity(state): (material: Material) => number {
      return (material: Material): number => {
        return state.inventory[material.name]
          ? state.inventory[material.name].quantity
          : 0;
      };
    }
  },
  mutations: {
    setInventory(state, newInventory: IDictionary<InventoryItem>): void {
      state.inventory = newInventory;
    },
    setInventoryItemQuantity(state, params: InventoryItem): void {
      if (state.inventory[params.material.name]) {
        state.inventory[params.material.name].quantity = params.quantity;
      } else {
        state.inventory[params.material.name] = params;
      }
    }
  },
  actions: {
    // getInitialInventory({ commit }, materials: Material[]): void {
    //   const rawInventory = {} as IDictionary<InventoryItem>;
    //   for (const material of materials) {
    //     rawInventory[material.name] = {
    //       material,
    //       quantity: 0
    //     } as InventoryItem;
    //   }
    //   commit("setInventory", rawInventory);
    // }
  }
};

export default new Vuex.Store<RootState>(store);
