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
const product_1 = require("../models/product");
const authoraization_1 = __importDefault(require("../middlewares/authoraization"));
const store = new product_1.ProductStore();
const index = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield store.index();
        res.json(product);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield store.show(req.params.id);
        if (product == null) {
            res.status(404);
        }
        res.json(product);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = {
            id: req.body.id,
            name: req.body.name,
            price: req.body.price,
            category: req.body.category
        };
        const newProduct = yield store.create(product);
        res.json(newProduct);
    }
    catch (err) {
        console.log(err);
        res.status(400);
        res.json(err);
    }
});
const product_routes = (app) => {
    app.get('/products', index);
    app.get('/products/:id', show);
    app.post('/products', authoraization_1.default, create);
};
exports.default = product_routes;
