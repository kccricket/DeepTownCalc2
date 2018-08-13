import InventoryItem from "@/game-types/InventoryItem";
import Material from "@/game-types/Material";
import MaterialComponent from "@/game-types/MaterialComponent";

export default class RequiredItem {
  public readonly material: Material;
  public readonly requiredBy: InventoryItem[] = new Array<InventoryItem>();
  public readonly inventoryItem: InventoryItem;

  public get displayQuantity(): number {
    return this.yieldCount * this.materialYield;
  }

  private get materialYield(): number {
    return this.material.yield || 1;
  }

  private get yieldCount(): number {
    return Math.ceil(this.quantity / this.materialYield);
  }

  public constructor(thisMaterial: Material, inventoryItem: InventoryItem) {
    this.material = thisMaterial;
    this.inventoryItem = inventoryItem;
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

    // if (units < 1) {
    //   throw new RangeError(
    //     "Holy guacamole. The quantity of this RequiredItem is less than one. God speed."
    //   );
    // }
    units -= this.inventoryItem.quantity;

    return units < 0 ? 0 : units;
  }

  public getSecondsToMake(generatorUnits: number = 1): number | undefined {
    if (!this.material.time) return undefined;
    return (this.yieldCount * this.material.time) / generatorUnits;
  }
}
