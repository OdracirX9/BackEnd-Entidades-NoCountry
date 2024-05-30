import express from "express";
import morgan from "morgan";
import cors from 'cors'
import * as keysEnv from './config'

//IMPORTANDO RUTAS DE PAGINAS
import EntidadesRouter from "./routes/Entidades.routes";

const app = express();

//USO DE MIDDLE PARA EXPRESS
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))


//RUTAS EN DONDE ESTARAN LAS PAGINAS ASIGANDAS A VISTAS Y EDICION
app.use('/entidades', EntidadesRouter)

app.set('port', keysEnv.PORT)

//ABRIR SERVIDOR EN EL PUERTO ASIGNADO
app.listen(app.get('port'), ()=>{
    console.log('')
    console.log('------------------------------------------------------------')
    console.log('------------------------------------------------------------')
    console.log(`Server on port ${app.get('port')}`)
    console.log('')

})


//INICIALIZACION DE BASE DE DATOSS MONGODB
import './database'