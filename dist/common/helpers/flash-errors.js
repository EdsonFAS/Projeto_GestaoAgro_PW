"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setOld = exports.setFlashErrors = exports.flashErrors = void 0;
const flashErrors = (req, res, next) => {
    res.locals.session = req.session;
    const flashErrors = req.session.flashErrors;
    const old = req.session.old;
    if (flashErrors) {
        res.locals.flashErrors = flashErrors;
        req.session.flashErrors = null;
    }
    if (old) {
        res.locals.odd = old;
        req.session.odd = null;
    }
    next();
};
exports.flashErrors = flashErrors;
const setFlashErrors = (req, errors) => {
    req.session['flashErrors'] = errors;
};
exports.setFlashErrors = setFlashErrors;
const setOld = (req, old) => {
    req.session['old'] = old;
};
exports.setOld = setOld;
//# sourceMappingURL=flash-errors.js.map