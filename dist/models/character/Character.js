"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createName_1 = __importDefault(require("./createName"));
const createPersonalAttributes_1 = __importDefault(require("./createPersonalAttributes"));
const createPhysicalAttributes_1 = __importDefault(require("./createPhysicalAttributes"));
const createProfession_1 = __importDefault(require("./createProfession"));
const createCharacter = () => {
    const name = (0, createName_1.default)();
    const personalAttributes = (0, createPersonalAttributes_1.default)();
    const physicalAttributes = (0, createPhysicalAttributes_1.default)();
    const profession = (0, createProfession_1.default)();
    return {
        name,
        personalAttributes,
        physicalAttributes,
        profession,
    };
};
exports.default = createCharacter;
