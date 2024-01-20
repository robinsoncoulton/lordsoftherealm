"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getRandomElement_1 = __importDefault(require("../../utils/getRandomElement"));
const titles_json_1 = __importDefault(require("../../../static/names/titles.json"));
const firstNames_json_1 = __importDefault(require("../../../static/names/firstNames.json"));
const lastNames_json_1 = __importDefault(require("../../../static/names/lastNames.json"));
exports.default = () => {
    const title = (0, getRandomElement_1.default)(titles_json_1.default);
    const firstName = (0, getRandomElement_1.default)(firstNames_json_1.default);
    const lastName = (0, getRandomElement_1.default)(lastNames_json_1.default);
    return `${title} ${firstName} ${lastName}`;
};
