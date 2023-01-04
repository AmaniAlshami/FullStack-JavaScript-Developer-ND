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
const order_1 = require("../models/order");
const authoraization_1 = __importDefault(require("../middlewares/authoraization"));
const store = new order_1.orderStore();
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield store.index(req.params.user_id);
        res.json(product);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield store.show(req.params.id, req.params.user_id);
        res.json(order);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = {
            id: parseInt(req.params.id),
            user_id: parseInt(req.params.user_id),
            status: "Active"
        };
        const newOrder = yield store.create(order);
        res.json(newOrder);
    }
    catch (err) {
        res.json(err);
        console.log(err);
        res.status(400);
    }
});
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orderId = req.params.id;
    const productId = req.body.productId;
    const quantity = parseInt(req.body.quantity);
    try {
        const addedProduct = yield store.addProduct(quantity, orderId, productId);
        res.json(addedProduct);
    }
    catch (err) {
        console.log(err);
        res.status(400);
        res.json(err);
    }
});
const order_routes = (app) => {
    app.get('/orders', authoraization_1.default, index);
    app.get('/orders/:id', authoraization_1.default, show);
    app.post('/orders/:id', authoraization_1.default, create);
    // add product
    app.post('/orders/:id/products', authoraization_1.default, addProduct);
};
exports.default = order_routes;
