import Material from "@/game-types/Material";
import { RequiredItem } from "@/game-types/RequiredItem";
import { DemandInventoryItem } from "@/game-types/DemandInventoryItem";

export class DemandItem implements DemandInventoryItem {
  public readonly quantity: number;
  public readonly material: Material;

  public constructor(input: { material: Material; quantity: number }) {
    this.material = input.material;
    this.quantity = input.quantity;
  }

  public get isDemanded(): boolean {
    return this.quantity > 0;
  }
}
