"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const keysEnv = __importStar(require("./config"));
//IMPORTANDO RUTAS DE PAGINAS
const Entidades_routes_1 = __importDefault(require("./routes/Entidades.routes"));
const app = (0, express_1.default)();
//USO DE MIDDLE PARA EXPRESS
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
//RUTAS EN DONDE ESTARAN LAS PAGINAS ASIGANDAS A VISTAS Y EDICION
app.get('/', (req, res) => {
    res.send('BACKEND ENTIDADES');
});
app.use('/entidades', Entidades_routes_1.default);
app.set('port', keysEnv.PORT);
//ABRIR SERVIDOR EN EL PUERTO ASIGNADO
app.listen(app.get('port'), () => {
    console.log('');
    console.log('------------------------------------------------------------');
    console.log('------------------------------------------------------------');
    console.log(`Server on port ${app.get('port')}`);
    console.log('');
});
//INICIALIZACION DE BASE DE DATOSS MONGODB
require("./database");
