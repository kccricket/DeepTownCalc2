import QuantifiedMaterial from "@/game-types/QuantifiedMaterial";

interface MaterialComponent extends QuantifiedMaterial {
  readonly material: string;
  readonly quantity: number;
}

export default MaterialComponent;
