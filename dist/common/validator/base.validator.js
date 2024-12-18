"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _BaseValidator__data, _BaseValidator__isError, _BaseValidator__errors;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseValidator = void 0;
const class_validator_1 = require("class-validator");
class BaseValidator {
    constructor() {
        _BaseValidator__data.set(this, void 0);
        _BaseValidator__isError.set(this, false);
        _BaseValidator__errors.set(this, []);
    }
    get isError() {
        return __classPrivateFieldGet(this, _BaseValidator__isError, "f");
    }
    get getErrors() {
        return __classPrivateFieldGet(this, _BaseValidator__errors, "f");
    }
    get getData() {
        return __classPrivateFieldGet(this, _BaseValidator__data, "f");
    }
    async validator(data) {
        __classPrivateFieldSet(this, _BaseValidator__data, data, "f");
        const errors = await (0, class_validator_1.validate)(data, {
            whitelist: true,
            validationError: { target: false, value: false },
        });
        errors.forEach((e) => {
            if (e.constraints) {
                __classPrivateFieldSet(this, _BaseValidator__isError, true, "f");
                for (const constraint in e.constraints) {
                    __classPrivateFieldGet(this, _BaseValidator__errors, "f").push({
                        property: e.property,
                        message: e.constraints[constraint],
                    });
                }
            }
        });
        return this;
    }
}
exports.BaseValidator = BaseValidator;
_BaseValidator__data = new WeakMap(), _BaseValidator__isError = new WeakMap(), _BaseValidator__errors = new WeakMap();
//# sourceMappingURL=base.validator.js.map