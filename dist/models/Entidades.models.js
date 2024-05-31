"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const EntidadesSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        require: true,
        trim: true
    },
    direccion: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true
    },
    telefono: {
        type: Number,
        require: true,
        trim: true
    },
    ubicacion: {
        type: String,
        require: true,
        trim: true
    },
    images: {
        type: [String],
        validator: (e) => e.length <= 5
    }
}, {
    versionKey: false,
    timestamps: true
});
exports.default = (0, mongoose_1.model)('Entidades', EntidadesSchema);
