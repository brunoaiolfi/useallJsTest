import { Category } from "./categories";

export interface Movimentation {
  id: string;
  name: string;
  value: number;
  categoryKey: string;
  activity: "in" | "out";
  date: Date;
}
