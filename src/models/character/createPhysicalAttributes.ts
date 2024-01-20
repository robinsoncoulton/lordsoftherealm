import { PhysicalAttributes } from "./types/Character";
import createDisposition from "./createDisposition";
import createHair from "./createHair";
import createFacialHair from "./createFacialHair";
import createPhysique from "./createPhysique";

export default (): PhysicalAttributes => {
  return {
    hair: createHair(),
    facialHair: createFacialHair(),
    physique: createPhysique(),
    disposition: createDisposition(),
  };
};
