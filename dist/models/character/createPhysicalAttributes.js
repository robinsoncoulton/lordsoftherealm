"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createDisposition_1 = __importDefault(require("./createDisposition"));
const createHair_1 = __importDefault(require("./createHair"));
const createFacialHair_1 = __importDefault(require("./createFacialHair"));
const createPhysique_1 = __importDefault(require("./createPhysique"));
exports.default = () => {
    return {
        hair: (0, createHair_1.default)(),
        facialHair: (0, createFacialHair_1.default)(),
        physique: (0, createPhysique_1.default)(),
        disposition: (0, createDisposition_1.default)(),
    };
};
