"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validation = void 0;
const validation = (req, res, next) => {
    const { filename } = req.query;
    const width = Number(req.query.width);
    const height = Number(req.query.height);
    if (!filename)
        return res.status(404).send('Yous should include filename');
    next();
};
exports.validation = validation;
