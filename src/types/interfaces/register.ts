import { CategorySelected } from "./categories";

export interface RegisterMovimentation {
  name: string;
  value: number;
  category: CategorySelected;
  activity: "in" | "out";
}
