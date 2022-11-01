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
const express_1 = require("express");
const fs_1 = __importDefault(require("fs"));
const validation_1 = require("../../middlewares/validation");
const imageHandler_1 = require("../../Utilities/imageHandler");
// ref : https://www.npmjs.com/package/express-api-cache 
var cacheService = require("express-api-cache");
var cache = cacheService.cache;
const routes = (0, express_1.Router)();
routes.get('/', validation_1.validation, cache("10 minutes"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filename = req.query.filename;
    const width = Number(req.query.width);
    const height = Number(req.query.height);
    // if only filename show the Original one
    if (isNaN(width) && isNaN(height)) {
        const imagePath = (0, imageHandler_1.getImage)(filename);
        if (fs_1.default.existsSync(imagePath)) {
            return res.sendFile(imagePath);
        }
        return res.status(404).send('Image not found');
    }
    else 
    // if provide a width and hight
    // call a function to resize the image and save them in new folder to use in coming request with same size 
    {
        if (isNaN(width) || isNaN(height)) {
            return res.status(404).send('both width and height are required');
        }
        const resutl = yield (0, imageHandler_1.resizeImage)(filename, width, height);
        if (resutl != null && fs_1.default.existsSync(resutl)) {
            return res.sendFile(resutl);
        }
        throw new Error('BROKEN');
    }
}));
exports.default = routes;
