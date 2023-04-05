"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const headers_1 = __importDefault(require("../service/headers"));
const http = {
    cors(req, res) {
        res.writeHead(200, headers_1.default);
        res.end();
    },
    notFound(req, res) {
        res.writeHead(404, headers_1.default);
        res.write(JSON.stringify({
            status: 'false',
            message: '無此網絡路由',
        }));
        res.end();
    }
};
exports.default = http;
