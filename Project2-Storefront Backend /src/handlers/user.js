"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authoraization_1 = __importDefault(require("../middlewares/authoraization"));
const tokenSecret = process.env.TOKEN_SECRET;
const store = new user_1.UserStore();
const create = async (req, res) => {
    try {
        const user = {
            id: req.body.id,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password
        };
        const newUser = await store.create(user);
        var token = jsonwebtoken_1.default.sign({ user: newUser }, tokenSecret);
        res.json(token);
    }
    catch (err) {
        console.log(err);
        res.status(400);
        res.json(err);
    }
};
const verify = async (req, res) => {
    try {
        res.json('Welcome .. ');
    }
    catch (err) {
        res.status(400);
        return;
    }
};
const user_routes = (app) => {
    app.get('/user', authoraization_1.default, verify);
    app.post('/user', create);
};
exports.default = user_routes;
