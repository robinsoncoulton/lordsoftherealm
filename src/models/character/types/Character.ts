import { IntRange } from "./IntRange";
import { Hair, FacialHair } from "./Hair";
import { Physique } from "./Physique";
import { Profession } from "./Profession";
import { Disposition } from "./Disposition";

export type Character = {
  name: string;
  personalAttributes: PersonalAttributes;
  physicalAttributes: PhysicalAttributes;
  profession: Profession.NOBLEMAN;
};

export type PhysicalAttributes = {
  hair: Hair;
  facialHair: FacialHair;
  physique: Physique;
  disposition: Disposition;
};

export type PersonalAttributes = {
  scores: {
    chivalry: IntRange<0, 100>;
    loyalty: IntRange<0, 100>;
    wisdom: IntRange<0, 100>;
    justice: IntRange<0, 100>;
    military_Prowess: IntRange<0, 100>;
    charisma: IntRange<0, 100>;
    diplomacy: IntRange<0, 100>;
    piety: IntRange<0, 100>;
    generosity: IntRange<0, 100>;
    mercy: IntRange<0, 100>;
    stewardship: IntRange<0, 100>;
    courtesy: IntRange<0, 100>;
    tact: IntRange<0, 100>;
    endurance: IntRange<0, 100>;
    cultural_Appreciation: IntRange<0, 100>;
    education: IntRange<0, 100>;
    accessibility: IntRange<0, 100>;
    lavishness: IntRange<0, 100>;
    noble_Lineage: IntRange<0, 100>;
    strategic_Vision: IntRange<0, 100>;
  };
};
