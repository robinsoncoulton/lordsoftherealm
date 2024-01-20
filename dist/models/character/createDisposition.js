"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generateRandomBellCurve_1 = __importDefault(require("../../utils/generateRandomBellCurve"));
exports.default = () => {
    return {
        positivity: (0, generateRandomBellCurve_1.default)(),
        libido: (0, generateRandomBellCurve_1.default)(),
        humour: (0, generateRandomBellCurve_1.default)(),
        resilience: (0, generateRandomBellCurve_1.default)(),
        emotional: (0, generateRandomBellCurve_1.default)(),
        assertiveness: (0, generateRandomBellCurve_1.default)(),
        diplomatic: (0, generateRandomBellCurve_1.default)(),
        empathy: (0, generateRandomBellCurve_1.default)(),
    };
};
