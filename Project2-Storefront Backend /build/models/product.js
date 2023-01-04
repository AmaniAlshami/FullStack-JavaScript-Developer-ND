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
exports.ProductStore = void 0;
// @ts-ignore
const database_1 = __importDefault(require("../database"));
class ProductStore {
    // Get product index
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // @ts-ignore
                const conn = yield database_1.default.connect();
                const sql = 'SELECT * FROM product';
                const result = yield conn.query(sql);
                conn.release();
                return result.rows;
            }
            catch (error) {
                throw new Error(`Could not get products. Error: ${error}`);
            }
        });
    }
    // Show one Product 
    show(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'SELECT * FROM product WHERE id=($1)';
                // @ts-ignore
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (error) {
                throw new Error(`Could not find Product ${id}. Error: ${error}`);
            }
        });
    }
    // Create new product 
    create(p) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log();
                const sql = 'INSERT INTO product (id, name, price, category) VALUES($1, $2, $3, $4) RETURNING *';
                // @ts-ignore
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [p.id, p.name, p.price, p.category]);
                const product = result.rows[0];
                conn.release();
                return product;
            }
            catch (error) {
                throw new Error(`Could not add new product. Error: ${error}`);
            }
        });
    }
}
exports.ProductStore = ProductStore;
