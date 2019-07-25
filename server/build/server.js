"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
const config_json_1 = require("./config/config.json");
App_1.default.listen(config_json_1.serverPort, () => console.log(`Server is starting on port ${config_json_1.serverPort}!`));
