import { IntRange } from "models/character/types/IntRange";

export default (
  mean: number = 50,
  standardDeviation: number = 15
): IntRange<0, 100> => {
  let u1, u2;

  // Generate two random numbers between 0 and 1
  do {
    u1 = Math.random();
    u2 = Math.random();
  } while (u1 === 0); // Ensure u1 is not zero to avoid infinity in the logarithm

  // Box-Muller transform
  const z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
  // const z1 = Math.sqrt(-2 * Math.log(u1)) * Math.sin(2 * Math.PI * u2);

  // Apply mean and standard deviation
  const result = z0 * standardDeviation + mean;

  return Math.floor(result) as IntRange<0, 100>;
};
