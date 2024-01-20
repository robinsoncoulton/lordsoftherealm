"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getRandomElement_1 = __importDefault(require("../../utils/getRandomElement"));
const Physique_1 = require("./types/Physique");
const generateRandomNumber_1 = __importDefault(require("../../utils/generateRandomNumber"));
exports.default = () => ({
    height: {
        ft: 5,
        in: (0, generateRandomNumber_1.default)(0, 11),
    },
    fitness: (0, getRandomElement_1.default)(Object.values(Physique_1.Fitness)),
    size: (0, getRandomElement_1.default)(Object.values(Physique_1.Size)),
    age: (0, generateRandomNumber_1.default)(17, 75),
    sex: Physique_1.Sex.MALE,
});
