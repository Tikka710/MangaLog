"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dev = process.env.NODE_ENV !== "production";
var next = require('next');
var Server = require('http').Server;
var port = process.env.PORT || 3000;
var app = next({ dev: dev });
var handle = app.getRequestHandler();
app.prepare().then(function () {
    var server = (0, express_1.default)();
    server.all('*', function (req, res) {
        return handle(req, res);
    });
    server.listen(port, function (err) {
        if (err)
            throw err;
        console.log("> Ready on http://localhost:".concat(process.env.NODE_ENV));
    });
});