import getRandomElement from "../../utils/getRandomElement";
import { Hair, HairColour, HairStrength, Hairstyle } from "./types/Hair";

export default (
  hairColour?: HairColour,
  hairStrength?: HairStrength,
  hairstyle?: Hairstyle
): Hair => ({
  colour: hairColour ? hairColour : getRandomElement(Object.values(HairColour)),
  strength: hairStrength
    ? hairStrength
    : getRandomElement(Object.values(HairStrength)),
  style: hairstyle ? hairstyle : getRandomElement(Object.values(Hairstyle)),
});
