"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isProvider = void 0;
const class_provider_1 = require("./class-provider");
const value_provider_1 = require("./value-provider");
const token_provider_1 = require("./token-provider");
const factory_provider_1 = require("./factory-provider");
function isProvider(provider) {
    return ((0, class_provider_1.isClassProvider)(provider) ||
        (0, value_provider_1.isValueProvider)(provider) ||
        (0, token_provider_1.isTokenProvider)(provider) ||
        (0, factory_provider_1.isFactoryProvider)(provider));
}
exports.isProvider = isProvider;
