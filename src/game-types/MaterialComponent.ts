import QuantifiedMaterial from "@/game-types/QuantifiedMaterial";
import MaterialName from "@/game-types/MaterialName";

export default interface MaterialComponent {
  readonly name: MaterialName;
  readonly quantity: number;
}
