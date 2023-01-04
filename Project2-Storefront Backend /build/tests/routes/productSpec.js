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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../../index"));
const request = (0, supertest_1.default)(index_1.default);
describe('Testing Product Endpoints', () => {
    const payload = { name: 'Apple', price: 5, category: 'Fruits', id: 10 };
    it('Testing Create product', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.post('/products')
            .send(payload)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdG5hbWUiOiJBbWFuaSIsImxhc3RuYW1lIjoiQWxzaGFtaSIsInBhc3N3b3JkIjoiJDJiJDEwJC92SUNzOGRJUWgzSDlDTEcwQ2kuZmVXV0ZWSjQ5dUc2Mk83UTFndHZsZ1IuN1NUOWo1UXBtIn0sImlhdCI6MTY3MjM0MTI2MH0.JjtjFJvOz9oNyDlOpOflbMyoD2UPWucQl7a1fBUku4U');
        expect(response.status).toBe(200);
    }));
    it('Testing get products', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/products');
        expect(response.status).toBe(200);
    }));
    it('Testing if product id = 10 exit', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/products/10');
        expect(response.status).toBe(200);
    }));
    it('Testing if product id 1000000 not exit', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/products/1000000');
        expect(response.status).toBe(404);
    }));
});
