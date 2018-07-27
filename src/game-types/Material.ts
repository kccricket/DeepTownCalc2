import MaterialSource from "@/game-types/MaterialSource";
import MaterialComponent from "@/game-types/MaterialComponent";

interface Material {
  readonly name: string;
  readonly source: MaterialSource;
  readonly time?: number;
  readonly components?: MaterialComponent[];
  readonly yield?: number;
  readonly byproducts?: MaterialComponent[];
  readonly value?: number;
}

export default Material;
