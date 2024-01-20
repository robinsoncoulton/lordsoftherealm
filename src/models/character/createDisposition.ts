import { Disposition } from "./types/Disposition";
import generateRandomBellCurve from "../../utils/generateRandomBellCurve";

export default (): Disposition => {
  return {
    positivity: generateRandomBellCurve(),
    libido: generateRandomBellCurve(),
    humour: generateRandomBellCurve(),
    resilience: generateRandomBellCurve(),
    emotional: generateRandomBellCurve(),
    assertiveness: generateRandomBellCurve(),
    diplomatic: generateRandomBellCurve(),
    empathy: generateRandomBellCurve(),
  };
};
