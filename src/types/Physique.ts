import { IntRange } from "./IntRange";

export type Physique = {
  height: { ft: IntRange<2, 7>; in: IntRange<0, 11> };
  fitness: Fitness;
  size: Size;
  age: IntRange<0, 120>;
  sex: SEX;
};

enum Fitness {
  FRAIL = "Frail",
  MODERATE = "Moderate",
  ROBUST = "Robust",
  ATHLETIC = "Athletic",
  PEAK = "Peak",
}

enum Size {
  SEVERELY_OBESE = "Severely Obese",
  OBESE = "Obese",
  OVERWEIGHT = "Overweight",
  NORMAL_WEIGHT = "Normal Weight",
  SLIM = "Slim",
}

enum SEX {
  MALE = "Male",
  FEMALE = "Female",
}
