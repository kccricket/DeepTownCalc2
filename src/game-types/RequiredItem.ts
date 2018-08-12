import InventoryItem from "@/game-types/InventoryItem";
import Material from "@/game-types/Material";
import { Dictionary } from "lodash";

export class RequiredItem implements InventoryItem {
  public readonly material: Material;
  public readonly requiredBy: Dictionary<InventoryItem>;

  public constructor(thisMaterial: Material) {
    this.material = thisMaterial;
    this.requiredBy = {} as Dictionary<InventoryItem>;
  }

  public get quantity(): number {
    let units: number = 0;

    for (const materialName in this.requiredBy) {
      units += this.requiredBy[materialName].material.components!.find(
        (c): boolean => c.materialName == this.material.name
      )!.quantity;
    }

    return units;
  }
}
