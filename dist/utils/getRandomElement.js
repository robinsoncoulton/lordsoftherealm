"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};
