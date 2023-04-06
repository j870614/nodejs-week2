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
const handleSuccess_1 = __importDefault(require("../service/handleSuccess"));
const handleError_1 = __importDefault(require("../service/handleError"));
const posts_1 = require("../model/posts");
;
const posts = {
    getPosts({ res }) {
        return __awaiter(this, void 0, void 0, function* () {
            const allPosts = yield posts_1.Posts.find();
            (0, handleSuccess_1.default)(res, allPosts);
            res.end();
        });
    },
    createPosts({ req, res, body }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!body) {
                    (0, handleError_1.default)(res);
                    return;
                }
                const data = JSON.parse(body);
                if (data.content) {
                    const newPost = yield posts_1.Posts.create({
                        name: data.name,
                        content: data.content,
                        tags: data.tags,
                        type: data.type,
                    });
                    (0, handleSuccess_1.default)(res, newPost);
                }
                else {
                    (0, handleError_1.default)(res);
                }
            }
            catch (err) {
                (0, handleError_1.default)(res, err);
            }
        });
    }
};
exports.default = posts;
