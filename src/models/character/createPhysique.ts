import getRandomElement from "../../utils/getRandomElement";
import { Physique, Fitness, Size, Sex } from "./types/Physique";
import generateRandomNumber from "../../utils/generateRandomNumber";
import { IntRange } from "./types/IntRange";

export default (): Physique => ({
  height: {
    ft: 5,
    in: generateRandomNumber(0, 11) as IntRange<0, 11>,
  },
  fitness: getRandomElement(Object.values(Fitness)),
  size: getRandomElement(Object.values(Size)),
  age: generateRandomNumber(17, 75) as IntRange<17, 75>,
  sex: Sex.MALE,
});
