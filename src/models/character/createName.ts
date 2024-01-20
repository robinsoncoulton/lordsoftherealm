import getRandomElement from "../../utils/getRandomElement";
import titles from "../../../static/names/titles.json";
import firstNames from "../../../static/names/firstNames.json";
import lastNames from "../../../static/names/lastNames.json";

export default (): string => {
  const title = getRandomElement(titles);
  const firstName = getRandomElement(firstNames);
  const lastName = getRandomElement(lastNames);
  return `${title} ${firstName} ${lastName}`;
};
