"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_NAME = exports.DB_PASSWORD = exports.DB_USER = exports.PORT = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.PORT = process.env.PORT || 5000;
exports.DB_USER = process.env.DB_USER || 'root';
exports.DB_PASSWORD = process.env.DB_PASSWORD || 'password';
exports.DB_NAME = process.env.DB_NAME || 'Mascotas';
