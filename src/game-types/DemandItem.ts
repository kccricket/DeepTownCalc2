import Material from "@/game-types/Material";
import RequiredItem from "@/game-types/RequiredItem";
import { DemandInventoryItem } from "@/game-types/DemandInventoryItem";

export class DemandItem implements DemandInventoryItem {
  public readonly quantity: number;
  public readonly material: Material;
  public readonly parent: RequiredItem;

  public constructor(
    input: {
      material: Material;
      quantity: number;
    },
    parent: RequiredItem
  ) {
    this.material = input.material;
    this.quantity = input.quantity;
    this.parent = parent;
  }

  public get isDemanded(): boolean {
    return true;
  }
}
