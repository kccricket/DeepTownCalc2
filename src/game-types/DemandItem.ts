import Material from "@/game-types/Material";
import RequiredItem from "@/game-types/RequiredItem";

export default class DemandItem extends RequiredItem {
  private _quantity: number;

  public constructor(thisMaterial: Material, quantity: number) {
    super(thisMaterial);
    this._quantity = quantity;
  }

  public get quantity(): number {
    return this._quantity;
  }
}
