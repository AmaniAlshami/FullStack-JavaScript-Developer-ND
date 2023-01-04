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
const user_1 = require("../models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authoraization_1 = __importDefault(require("../middlewares/authoraization"));
const tokenSecret = process.env.TOKEN_SECRET;
const store = new user_1.UserStore();
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = {
            id: req.body.id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password
        };
        const newUser = yield store.create(user);
        var token = jsonwebtoken_1.default.sign({ user: newUser }, tokenSecret);
        res.json(token);
    }
    catch (err) {
        console.log(err);
        res.status(400);
        res.json(err);
    }
});
const index = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield store.index();
        res.json(user);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield store.show(req.params.id);
        res.json(user);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const user_routes = (app) => {
    app.get('/users/:id', authoraization_1.default, show);
    app.get('/users', authoraization_1.default, index);
    app.post('/users', create);
};
exports.default = user_routes;
