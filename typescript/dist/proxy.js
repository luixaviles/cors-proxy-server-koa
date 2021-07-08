"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var koa_1 = __importDefault(require("koa"));
var cors_1 = __importDefault(require("@koa/cors"));
var koa_proxies_1 = __importDefault(require("koa-proxies"));
var app = new koa_1.default();
var port = process.env.PORT || 3000;
app.use(cors_1.default());
var proxyOptions = {
    target: 'https://app.deliverychain.io',
    changeOrigin: true,
    logs: true,
};
app.use(koa_proxies_1.default('/', proxyOptions));
app.listen(port);
console.log("listening on port " + port);
