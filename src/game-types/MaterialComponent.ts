import QuantifiedMaterial from "@/game-types/QuantifiedMaterial";

interface MaterialComponent extends QuantifiedMaterial {
  readonly materialName: string;
  readonly quantity: number;
}

export default MaterialComponent;
