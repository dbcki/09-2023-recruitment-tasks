import { Repair } from "./repair.model";

export interface Car {
    id: number;
    make: string;
    model: string;
    year: number;
    repairs: Repair[];
  }