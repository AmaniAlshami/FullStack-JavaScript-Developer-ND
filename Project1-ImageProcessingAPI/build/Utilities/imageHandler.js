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
exports.getImage = exports.resizeImage = void 0;
const path_1 = __importDefault(require("path"));
const sharp = require('sharp');
// Resizing the image and save it in Thumbnails folder.
function resizeImage(filename, width, height) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const imagePath = getImage(filename);
            yield sharp(imagePath)
                .png()
                .resize({
                width: width,
                height: height
            })
                .toFile(`./assets/thumbnails/${filename}_${width}_${height}.png`)
                .then(() => console.log('success'));
            return path_1.default.join(__dirname, '../../assets/thumbnails/', `${filename}_${width}_${height}.png`);
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.resizeImage = resizeImage;
// Get image by filename
function getImage(filename) {
    const imagePath = path_1.default.join(__dirname, '../../assets/images', `${filename}.png`);
    return imagePath;
}
exports.getImage = getImage;
