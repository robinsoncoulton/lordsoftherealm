import getRandomElement from "../../utils/getRandomElement";
import {
  FacialHair,
  BeardStyle,
  BeardColour,
  HairStrength,
} from "./types/Hair";

export default (
  beardStyle?: BeardStyle,
  beardColour?: BeardColour,
  length?: HairStrength
): FacialHair => ({
  style: beardStyle ? beardStyle : getRandomElement(Object.values(BeardStyle)),
  colour: beardColour
    ? beardColour
    : getRandomElement(Object.values(BeardColour)),
  length: length ? length : getRandomElement(Object.values(HairStrength)),
});
