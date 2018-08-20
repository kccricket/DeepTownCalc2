import InventoryItem from "@/game-types/InventoryItem";
import Material from "@/game-types/Material";
import MaterialComponent from "@/game-types/MaterialComponent";
import { DemandInventoryItem } from "@/game-types/DemandInventoryItem";
import { DemandItem } from "@/game-types/DemandItem";

export class RequiredItem implements DemandInventoryItem {
  public readonly material: Material;
  public readonly requiredBy: DemandInventoryItem[] = new Array<
    DemandInventoryItem
  >();
  public readonly inventoryItem: InventoryItem;

  public get isDemanded(): boolean {
    return (
      this.requiredBy.filter(
        (r): boolean => r instanceof DemandItem && r.unadjustedQuantity > 0
      ) != undefined
    );
  }

  public get isRequired(): boolean {
    return (
      this.requiredBy.filter(
        (r): boolean => r instanceof RequiredItem && r.unadjustedQuantity > 0
      ) != undefined
    );
  }

  public get isSatisfied(): boolean {
    return this.quantity == 0;
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
    rootDemand?: DemandInventoryItem
  ) {
    this.material = thisMaterial;
    this.inventoryItem = inventoryItem;
    if (rootDemand) this.requiredBy.push(rootDemand);
  }

  public get displayQuantity(): number {
    return this.quantity * this.materialYield;
  }

  public get unadjustedQuantity(): number {
    let units: number = 0;

    for (const itemRequiringThisMateiral of this.requiredBy) {
      if (itemRequiringThisMateiral.material.name == this.material.name) {
        units += itemRequiringThisMateiral.unadjustedQuantity;
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
              itemRequiringThisMateiral.unadjustedQuantity;
          }
        }
      }
    }

    return units;
  }

  public get rawQuantity(): number {
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

    return units;
  }

  public get quantity(): number {
    const units = this.rawQuantity - this.inventoryItem.quantity;
    return units < 0 ? 0 : Math.ceil(units / this.materialYield);
  }

  public getSecondsToMake(generatorUnits: number = 1): number | undefined {
    if (!this.material.time) return undefined;
    return (this.yieldCount * this.material.time) / generatorUnits;
  }
}
