import { IntRange } from "./IntRange";

export type Disposition = {
  description: "a series of values between 0 and 100 that indicates a character's general personality and behaviour";
  positivity: IntRange<0, 100>;
  libido: IntRange<0, 100>;
  humour: IntRange<0, 100>;
  resilience: IntRange<0, 100>;
  emotional: IntRange<0, 100>;
  assertiveness: IntRange<0, 100>;
  diplomatic: IntRange<0, 100>;
  empathy: IntRange<0, 100>;
};
