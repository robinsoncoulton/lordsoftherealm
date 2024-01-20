import { Profession } from "./types/Profession";
import {
  Character,
  PersonalAttributes,
  PhysicalAttributes,
} from "models/character/types/Character";
import createName from "./createName";
import createPersonalAttributes from "./createPersonalAttributes";
import createPhysicalAttributes from "./createPhysicalAttributes";
import createProfession from "./createProfession";

const createCharacter = (): Character => {
  const name: string = createName();
  const personalAttributes: PersonalAttributes = createPersonalAttributes();
  const physicalAttributes: PhysicalAttributes = createPhysicalAttributes();
  const profession: Profession = createProfession();

  return {
    name,
    personalAttributes,
    physicalAttributes,
    profession,
  };
};

export default createCharacter;
