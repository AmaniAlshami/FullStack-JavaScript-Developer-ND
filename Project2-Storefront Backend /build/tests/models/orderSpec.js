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
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = require("../../models/order");
const store = new order_1.orderStore();
describe("Order Model", () => {
    it('should have an index method', () => {
        expect(store.index).toBeDefined();
    });
    it('should have a show method', () => {
        expect(store.show).toBeDefined();
    });
    it('should have a create method', () => {
        expect(store.create).toBeDefined();
    });
    it('create method should add a Order', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield store.create({
            id: 4,
            user_id: 1,
            status: "Active"
        });
        expect(result.id).toEqual(4);
    }));
    it('index method should return a list of Orders', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield store.index("1");
        expect(result).not.toBeNull();
    }));
    it('show method should return the correct Order', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield store.show("4", "1");
        expect(result).not.toBeNull();
    }));
});
