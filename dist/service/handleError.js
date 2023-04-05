"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const headers_1 = __importDefault(require("./headers"));
function handleErr(res, err) {
    res.writeHead(400, headers_1.default);
    let message = '';
    if (err instanceof Error) {
        message = err.message;
    }
    else {
        message = '欄位未填寫正確或無此 id';
    }
    res.write(JSON.stringify({
        status: 'false',
        message,
    }));
    res.end();
}
;
exports.default = handleErr;
