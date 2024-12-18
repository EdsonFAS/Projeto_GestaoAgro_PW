"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hbsRegisterHelpers = void 0;
const helpers = {
    dateFormat: (date) => {
        const locale = new Date(date);
        return locale.toLocaleString('pt-BR');
    },
    inc: (value) => parseInt(value) + 1,
};
const hbsRegisterHelpers = (hbs) => {
    for (const functionName in helpers) {
        hbs.registerHelper(functionName, helpers[functionName]);
    }
};
exports.hbsRegisterHelpers = hbsRegisterHelpers;
//# sourceMappingURL=hbs-functions.js.map