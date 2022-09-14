"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const injectable_1 = require("./injectable");
const dependency_container_1 = require("../dependency-container");
function scoped(lifecycle, token) {
    return function (target) {
        (0, injectable_1.default)()(target);
        dependency_container_1.instance.register(token || target, target, {
            lifecycle
        });
    };
}
exports.default = scoped;
