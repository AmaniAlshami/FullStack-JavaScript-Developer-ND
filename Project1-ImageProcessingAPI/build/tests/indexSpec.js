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
const index_1 = __importDefault(require("../index"));
const request = (0, supertest_1.default)(index_1.default);
describe('Testing Image Endpoints', () => {
    it('Testing if Default image is exist', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/image?filename=default');
        expect(response.status).toBe(200);
    }));
    it('Testing if Default resizing by width and hight', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/image?filename=default&width=100&height=100');
        expect(response.status).toBe(200);
    }));
    it('Testing if Default resizing by width', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/image?filename=default&width=500');
        expect(response.status).toBe(200);
    }));
    it('Testing if Any image is not exist', () => __awaiter(void 0, void 0, void 0, function* () {
        yield request.get('/image?filename=default22').expect(404);
    }));
});
