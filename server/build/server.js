"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = __importDefault(require("./App"));
var config_1 = __importDefault(require("./config/config"));
var port = config_1.default.serverPort;
App_1.default.listen(port, function () { return console.log("Server is starting on port " + port + "!"); });
