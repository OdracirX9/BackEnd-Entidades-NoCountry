"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEntidad = exports.updateEntidad = exports.getEntidad = exports.getEntidades = exports.createEntidad = void 0;
const Entidades_models_1 = __importDefault(require("../models/Entidades.models"));
const createEntidad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newEntidad = new Entidades_models_1.default(req.body);
        const saveEntidad = yield newEntidad.save();
        res.json(saveEntidad);
    }
    catch (error) {
        console.log(error);
    }
});
exports.createEntidad = createEntidad;
const getEntidades = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const entidades = yield Entidades_models_1.default.find();
        return res.json(entidades);
    }
    catch (error) {
        res.json(error);
    }
});
exports.getEntidades = getEntidades;
const getEntidad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const entidadFound = yield Entidades_models_1.default.findById(req.params.id);
        if (entidadFound) {
            return res.json(entidadFound);
        }
        console.log(entidadFound);
        return res.json([{ message: "La entidad no fue encontrada" }]);
    }
    catch (error) {
        res.status(204).json(error);
    }
});
exports.getEntidad = getEntidad;
const updateEntidad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const entidadUpdate = yield Entidades_models_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(entidadUpdate);
    }
    catch (error) {
        res.status(204).json(error);
    }
});
exports.updateEntidad = updateEntidad;
const deleteEntidad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const entidadUpdate = yield Entidades_models_1.default.findByIdAndDelete(req.params.id);
        res.json(entidadUpdate);
    }
    catch (error) {
        res.status(204).json(error);
    }
});
exports.deleteEntidad = deleteEntidad;
