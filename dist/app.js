"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(routes_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    // eslint-disable-next-line
    console.log(`Example app listening on port ${PORT} in the ${process.env.ENV} environment.`);
});
