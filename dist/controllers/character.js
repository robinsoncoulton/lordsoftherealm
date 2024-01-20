"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const openAiAdaptor_1 = __importDefault(require("../adaptors/openAiAdaptor/openAiAdaptor"));
const Character_1 = __importDefault(require("../models/character/Character"));
const aiAdaptor = openAiAdaptor_1.default;
const characterController = {
    get: async function getCharacters(req, res) {
        try {
            res.status(200).json((0, Character_1.default)());
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },
    post: async function postCharacter(req, res) {
        try {
            const data = await aiAdaptor.chat();
            res.status(200).json(data);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },
};
exports.default = characterController;
