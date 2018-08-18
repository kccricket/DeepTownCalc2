import InventoryItem from "@/game-types/InventoryItem";
import Material from "@/game-types/Material";
import MaterialComponent from "@/game-types/MaterialComponent";
import { DemandInventoryItem } from "@/game-types/DemandInventoryItem";

export class RequiredItem implements DemandInventoryItem {
  public readonly material: Material;
  public readonly requiredBy: InventoryItem[] = new Array<InventoryItem>();
  public readonly inventoryItem: InventoryItem;
  public get isDemanded(): boolean {
    return this.quantity > 0;
  }

  private get materialYield(): number {
    return this.material.yield || 1;
  }

  private get yieldCount(): number {
    return Math.ceil(this.quantity / this.materialYield);
  }

  public constructor(
    thisMaterial: Material,
    inventoryItem: InventoryItem,
    rootDemand?: InventoryItem
  ) {
    this.material = thisMaterial;
    this.inventoryItem = inventoryItem;
    if (rootDemand) this.requiredBy.push(rootDemand);
  }

  public get displayQuantity(): number {
    return this.yieldCount * this.materialYield;
  }

  public get quantity(): number {
    let units: number = 0;

    for (const itemRequiringThisMateiral of this.requiredBy) {
      if (itemRequiringThisMateiral.material.name == this.material.name) {
        units += itemRequiringThisMateiral.quantity;
      } else {
        const componentsOfItemRequiringThisMaterial =
          itemRequiringThisMateiral.material.components;

        if (componentsOfItemRequiringThisMaterial) {
          const materialComponentOfTheItemRequiringThisMaterial = componentsOfItemRequiringThisMaterial.find(
            (c: MaterialComponent): boolean => {
              return c.materialName == this.material.name;
            }
          );

          if (materialComponentOfTheItemRequiringThisMaterial) {
            units +=
              materialComponentOfTheItemRequiringThisMaterial.quantity *
              itemRequiringThisMateiral.quantity;
          }
        }
      }
    }

    units -= this.inventoryItem.quantity;

    return units < 0 ? 0 : units;
  }

  public getSecondsToMake(generatorUnits: number = 1): number | undefined {
    if (!this.material.time) return undefined;
    return (this.yieldCount * this.material.time) / generatorUnits;
  }
}
