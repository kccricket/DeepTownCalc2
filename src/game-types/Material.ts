import MaterialName from "@/game-types/MaterialName";
import MaterialSource from "@/game-types/MaterialSource";
import MaterialComponent from "@/game-types/MaterialComponent";

export default interface Material {
  readonly name: MaterialName;
  source: MaterialSource;
  time?: number;
  components?: MaterialComponent[];
  batch?: number;
  byproducts?: Material[];
  value?: number;
}
