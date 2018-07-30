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
    demands: {} as IDictionary<InventoryItem>
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
    getAllDemands(state): IDictionary<InventoryItem> {
      return state.demands;
    }
  },
  mutations: {
    setInventory(state, newInventory: IDictionary<InventoryItem>): void {
      Vue.set(state, "inventory", newInventory);
    },
    setInventoryItemQuantity(state, item: InventoryItem): void {
      if (state.inventory[item.material.name])
        Vue.set(state.inventory[item.material.name], "quantity", item.quantity);
      else Vue.set(state.inventory, item.material.name, item);
    },
    updateDemand(state, newDemand: InventoryItem): void {
      Vue.set(state.demands, newDemand.material.name, newDemand);
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
