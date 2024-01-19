import { IntRange } from "./IntRange";
import { Hair, FacialHair } from "./Hair";
import { Physique } from "./Physique";
import { Profession } from "./Profession";
import { Disposition } from "./Disposition";

export type Character = {
  name: string;
  personalAttributes: {
    description: string;
    scores: {
      Chivalry: IntRange<0, 100>;
      Loyalty: IntRange<0, 100>;
      Wisdom: IntRange<0, 100>;
      Justice: IntRange<0, 100>;
      Military_Prowess: IntRange<0, 100>;
      Charisma: IntRange<0, 100>;
      Diplomacy: IntRange<0, 100>;
      Piety: IntRange<0, 100>;
      Generosity: IntRange<0, 100>;
      Mercy: IntRange<0, 100>;
      Stewardship: IntRange<0, 100>;
      Courtesy: IntRange<0, 100>;
      Tact: IntRange<0, 100>;
      Endurance: IntRange<0, 100>;
      Cultural_Appreciation: IntRange<0, 100>;
      Education: IntRange<0, 100>;
      Accessibility: IntRange<0, 100>;
      Lavishness: IntRange<0, 100>;
      Noble_Lineage: IntRange<0, 100>;
      Strategic_Vision: IntRange<0, 100>;
    };
  };
  physicalAttributes: {
    hair: Hair;
    facialHair: FacialHair;
    physique: Physique;
    disposition: Disposition;
  };
  profession: Profession.NOBLEMAN;
};
