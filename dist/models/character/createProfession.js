"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getRandomElement_1 = __importDefault(require("../../utils/getRandomElement"));
const Profession_1 = require("./types/Profession");
exports.default = () => (0, getRandomElement_1.default)(Object.values(Profession_1.Profession));
