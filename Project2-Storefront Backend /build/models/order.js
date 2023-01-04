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
exports.orderStore = void 0;
// @ts-ignore
const database_1 = __importDefault(require("../database"));
class orderStore {
    // Get order index
    index(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // @ts-ignore
                const conn = yield database_1.default.connect();
                const sql = 'select o.id as orderId , p.name as Product, p.category from orders o join order_products op on o.id = op.order_id inner join product p on p.id = op.product_id where o.user_id =($1)';
                const result = yield conn.query(sql, [user_id]);
                conn.release();
                return result.rows;
            }
            catch (error) {
                throw new Error(`Could not get orders. Error: ${error}`);
            }
        });
    }
    // Show one order 
    show(order_id, user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'select o.id , p.name , p.category from orders o join order_products op on o.id = op.order_id inner join product p on p.id = op.product_id where user_id =($1) and o.id=($2)';
                // @ts-ignore
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [user_id, order_id]);
                conn.release();
                return result.rows;
            }
            catch (error) {
                throw new Error(`Could not find order ${order_id}. Error: ${error}`);
            }
        });
    }
    // Create new order 
    create(p) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log();
                const sql = 'INSERT INTO orders (id, user_id, status) VALUES($1, $2, $3) RETURNING *';
                // @ts-ignore
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [p.id, p.user_id, p.status]);
                const product = result.rows[0];
                conn.release();
                return product;
            }
            catch (error) {
                throw new Error(`Could not add new order. Error: ${error}`);
            }
        });
    }
    // add product to the order 
    addProduct(quantity, orderId, productId) {
        return __awaiter(this, void 0, void 0, function* () {
            // get order to see if it is open
            try {
                const ordersql = 'SELECT * FROM orders WHERE id=($1)';
                //@ts-ignore
                const conn = yield database_1.default.connect();
                const result = yield conn.query(ordersql, [orderId]);
                const order = result.rows[0];
                console.log(order);
                if (order.status !== "Active") {
                    throw new Error(`Could not add product ${productId} to order ${orderId} because order status is ${order.status}`);
                }
                conn.release();
            }
            catch (err) {
                throw new Error(`${err}`);
            }
            try {
                const sql = 'INSERT INTO order_products (quantity, order_id, product_id) VALUES($1, $2, $3) RETURNING *';
                //@ts-ignore
                const conn = yield database_1.default.connect();
                const result = yield conn
                    .query(sql, [quantity, orderId, productId]);
                const order = result.rows[0];
                conn.release();
                return order;
            }
            catch (err) {
                throw new Error(`Could not add product ${productId} to order ${orderId}: ${err}`);
            }
        });
    }
}
exports.orderStore = orderStore;
