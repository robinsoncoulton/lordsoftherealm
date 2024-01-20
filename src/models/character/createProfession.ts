import getRandomElement from "../../utils/getRandomElement";
import { Profession } from "./types/Profession";

export default (): Profession => getRandomElement(Object.values(Profession));
