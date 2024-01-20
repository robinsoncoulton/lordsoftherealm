"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generateRandomBellCurve_1 = __importDefault(require("../../utils/generateRandomBellCurve"));
exports.default = () => {
    return {
        scores: {
            chivalry: (0, generateRandomBellCurve_1.default)(),
            loyalty: (0, generateRandomBellCurve_1.default)(),
            wisdom: (0, generateRandomBellCurve_1.default)(),
            justice: (0, generateRandomBellCurve_1.default)(),
            military_Prowess: (0, generateRandomBellCurve_1.default)(),
            charisma: (0, generateRandomBellCurve_1.default)(),
            diplomacy: (0, generateRandomBellCurve_1.default)(),
            piety: (0, generateRandomBellCurve_1.default)(),
            generosity: (0, generateRandomBellCurve_1.default)(),
            mercy: (0, generateRandomBellCurve_1.default)(),
            stewardship: (0, generateRandomBellCurve_1.default)(),
            courtesy: (0, generateRandomBellCurve_1.default)(),
            tact: (0, generateRandomBellCurve_1.default)(),
            endurance: (0, generateRandomBellCurve_1.default)(),
            cultural_Appreciation: (0, generateRandomBellCurve_1.default)(),
            education: (0, generateRandomBellCurve_1.default)(),
            accessibility: (0, generateRandomBellCurve_1.default)(),
            lavishness: (0, generateRandomBellCurve_1.default)(),
            noble_Lineage: (0, generateRandomBellCurve_1.default)(),
            strategic_Vision: (0, generateRandomBellCurve_1.default)(),
        },
    };
};
