"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("../controllers/http"));
const posts_1 = __importDefault(require("../controllers/posts"));
const routes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { method, url } = req;
    console.log(method, url);
    let body = '';
    req.on('data', (chunk) => {
        body += chunk;
    });
    if (url === '/posts' && method === 'GET') {
        posts_1.default.getPosts({ req, res });
    }
    else {
        http_1.default.notFound(req, res);
    }
});
exports.default = routes;
