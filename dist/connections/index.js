"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const DB = 'mongodb://127.0.0.1:27017/post';
console.log('資料庫連線中...');
mongoose_1.default.connect(DB)
    .then(() => {
    console.log('資料庫連線成功');
})
    .catch((err) => {
    console.log('資料庫連線失敗');
    console.log(err.reason);
});
