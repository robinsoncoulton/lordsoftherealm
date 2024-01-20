"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getRandomElement_1 = __importDefault(require("../../utils/getRandomElement"));
const Hair_1 = require("./types/Hair");
exports.default = (hairColour, hairStrength, hairstyle) => ({
    colour: hairColour ? hairColour : (0, getRandomElement_1.default)(Object.values(Hair_1.HairColour)),
    strength: hairStrength
        ? hairStrength
        : (0, getRandomElement_1.default)(Object.values(Hair_1.HairStrength)),
    style: hairstyle ? hairstyle : (0, getRandomElement_1.default)(Object.values(Hair_1.Hairstyle)),
});
