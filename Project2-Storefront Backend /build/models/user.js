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
exports.UserStore = void 0;
// @ts-ignore
const database_1 = __importDefault(require("../database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const { PEPPER } = process.env;
const saltAround = process.env.SALT_ROUNDS;
class UserStore {
    // Get User index
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // @ts-ignore
                const conn = yield database_1.default.connect();
                const sql = 'SELECT * FROM Users';
                const result = yield conn.query(sql);
                conn.release();
                return result.rows;
            }
            catch (error) {
                throw new Error(`Could not get Users. Error: ${error}`);
            }
        });
    }
    // Show one User 
    show(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'SELECT id , firstName , lastName FROM Users WHERE id=($1)';
                // @ts-ignore
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (error) {
                throw new Error(`Could not find user ${id}. Error: ${error}`);
            }
        });
    }
    // Create new User 
    create(u) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'INSERT INTO Users (id, firstName, lastName, password) VALUES($1, $2, $3, $4) RETURNING *';
                // @ts-ignore
                const conn = yield database_1.default.connect();
                const hash = bcrypt_1.default.hashSync(u.password + PEPPER, parseInt(saltAround));
                const result = yield conn.query(sql, [u.id, u.firstName, u.lastName, hash]);
                console.log(result);
                const User = result.rows[0];
                conn.release();
                return User;
            }
            catch (error) {
                throw new Error(`Could not add new User . Error: ${error}`);
            }
        });
    }
    authenticate(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            // @ts-ignore
            const conn = yield database_1.default.connect();
            const sql = 'SELECT password FROM users WHERE username=($1) ';
            const result = yield conn.query(sql, [username]);
            console.log(password + PEPPER);
            if (result.rows.length) {
                const user = result.rows[0];
                console.log(user);
                if (bcrypt_1.default.compareSync(password + PEPPER, user.password_digest)) {
                    return user;
                }
            }
            return null;
        });
    }
}
exports.UserStore = UserStore;
