import Vue from "vue";
import Vuex from "vuex";
import InventoryItem from "@/game-types/InventoryItem";
import DemandedItem from "@/game-types/DemandedItem";
import Material from "@/game-types/Material";

Vue.use(Vuex);

class InventoryStore extends Array<InventoryItem> {
  public static create(): InventoryStore {
    return Object.create(InventoryStore.prototype);
  }

  private constructor(items: InventoryItem[]) {
    super(...items);
  }

  public getItemQuantity(materialId: number, newQuantity: number): number {
    return this[materialId].quantity;
  }

  public setItemQuantity(materialId: number, newQuantity: number): void {
    this[materialId].quantity = newQuantity;
  }
}

export default new Vuex.Store({
  state: {
    inventory: InventoryStore.create(),
    demands: new Array<InventoryItem>()
  },
  getters: {
    maybeGetDemandForMaterial(
      state
    ): (material: Material) => InventoryItem | undefined {
      return (material): InventoryItem | undefined => {
        return state.demands.find(
          (d: InventoryItem) => d.material.name === material.name
        );
      };
    },
    getInventoryItemQuantity(state): (materialId: number) => number {
      return (materialId): number => {
        return state.inventory[materialId].quantity;
      };
    }
  },
  mutations: {
    setInventory(state, newInventory: InventoryStore): void {
      state.inventory = newInventory;
    },
    setInventoryItemQuantity(state, { materialId, newQuantity }): void {
      state.inventory.setItemQuantity(materialId, newQuantity);
    }
  },
  actions: {
    getInitialInventory({ commit }, materials: Material[]): void {
      const rawInventory = InventoryStore.create();
      for (const material of materials) {
        rawInventory.push({
          material,
          quantity: 0
        } as InventoryItem);
      }
      commit("setInventory", rawInventory);
    }
  }
});
