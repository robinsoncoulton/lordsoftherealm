"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getRandomElement_1 = __importDefault(require("../../utils/getRandomElement"));
const Hair_1 = require("./types/Hair");
exports.default = (beardStyle, beardColour, length) => ({
    style: beardStyle ? beardStyle : (0, getRandomElement_1.default)(Object.values(Hair_1.BeardStyle)),
    colour: beardColour
        ? beardColour
        : (0, getRandomElement_1.default)(Object.values(Hair_1.BeardColour)),
    length: length ? length : (0, getRandomElement_1.default)(Object.values(Hair_1.HairStrength)),
});
