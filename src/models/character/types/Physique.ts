import { IntRange } from "./IntRange";

export type Physique = {
  height: { ft: IntRange<2, 7>; in: IntRange<0, 11> };
  fitness: Fitness;
  size: Size;
  age: IntRange<0, 120>;
  sex: Sex;
};

export enum Fitness {
  FRAIL = "Frail",
  MODERATE = "Moderate",
  ROBUST = "Robust",
  ATHLETIC = "Athletic",
  PEAK = "Peak",
}

export enum Size {
  SEVERELY_OBESE = "Severely Obese",
  OBESE = "Obese",
  OVERWEIGHT = "Overweight",
  NORMAL_WEIGHT = "Normal Weight",
  SLIM = "Slim",
}

export enum Sex {
  MALE = "Male",
  FEMALE = "Female",
}
