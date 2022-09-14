"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValueProvider = exports.isTokenProvider = exports.isNormalToken = exports.isFactoryProvider = exports.isClassProvider = void 0;
var class_provider_1 = require("./class-provider");
Object.defineProperty(exports, "isClassProvider", { enumerable: true, get: function () { return class_provider_1.isClassProvider; } });
var factory_provider_1 = require("./factory-provider");
Object.defineProperty(exports, "isFactoryProvider", { enumerable: true, get: function () { return factory_provider_1.isFactoryProvider; } });
var injection_token_1 = require("./injection-token");
Object.defineProperty(exports, "isNormalToken", { enumerable: true, get: function () { return injection_token_1.isNormalToken; } });
var token_provider_1 = require("./token-provider");
Object.defineProperty(exports, "isTokenProvider", { enumerable: true, get: function () { return token_provider_1.isTokenProvider; } });
var value_provider_1 = require("./value-provider");
Object.defineProperty(exports, "isValueProvider", { enumerable: true, get: function () { return value_provider_1.isValueProvider; } });
