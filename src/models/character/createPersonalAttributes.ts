import { PersonalAttributes } from "./types/Character";
import generateRandomBellCurve from "../../utils/generateRandomBellCurve";

export default (): PersonalAttributes => {
  return {
    scores: {
      chivalry: generateRandomBellCurve(),
      loyalty: generateRandomBellCurve(),
      wisdom: generateRandomBellCurve(),
      justice: generateRandomBellCurve(),
      military_Prowess: generateRandomBellCurve(),
      charisma: generateRandomBellCurve(),
      diplomacy: generateRandomBellCurve(),
      piety: generateRandomBellCurve(),
      generosity: generateRandomBellCurve(),
      mercy: generateRandomBellCurve(),
      stewardship: generateRandomBellCurve(),
      courtesy: generateRandomBellCurve(),
      tact: generateRandomBellCurve(),
      endurance: generateRandomBellCurve(),
      cultural_Appreciation: generateRandomBellCurve(),
      education: generateRandomBellCurve(),
      accessibility: generateRandomBellCurve(),
      lavishness: generateRandomBellCurve(),
      noble_Lineage: generateRandomBellCurve(),
      strategic_Vision: generateRandomBellCurve(),
    },
  };
};
