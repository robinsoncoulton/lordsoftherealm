"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const openAiAdaptor = {
    chat: async () => {
        const response = await axios_1.default.post(`${process.env.AI_BASE_URL}/v1/chat/completions`, {});
        return response.data;
    },
};
exports.default = openAiAdaptor;
