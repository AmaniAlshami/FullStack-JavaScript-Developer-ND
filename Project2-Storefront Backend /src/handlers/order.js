"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = require("../models/order");
const authoraization_1 = __importDefault(require("../middlewares/authoraization"));
const store = new order_1.orderStore();
const index = async (_req, res) => {
    const product = await store.index();
    res.json(product);
};
const show = async (req, res) => {
    const order = await store.show(req.params.id);
    res.json(order);
};
const create = async (req, res) => {
    try {
        const order = {
            id: 1,
            user_id: req.body.user_id,
            status: "Active"
        };
        const newOrder = await store.create(order);
        res.json(newOrder);
    }
    catch (err) {
        console.log(err);
        res.status(400);
        res.json(err);
    }
};
const addProduct = async (_req, res) => {
    const orderId = _req.params.id;
    const productId = _req.body.productId;
    const quantity = parseInt(_req.body.quantity);
    try {
        const addedProduct = await store.addProduct(quantity, orderId, productId);
        res.json(addedProduct);
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
};
const order_routes = (app) => {
    app.get('/orders', authoraization_1.default, index);
    app.get('/orders/:id', authoraization_1.default, show);
    app.post('/orders', authoraization_1.default, create);
    // add product
    app.post('/orders/:id/products', authoraization_1.default, addProduct);
};
exports.default = order_routes;
