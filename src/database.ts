import mongoose, { ConnectOptions } from "mongoose";
import * as keysEnv from './config'

( async()=>{
    
    try {
        const db = await mongoose.connect(`mongodb+srv://${keysEnv.DB_USER}:${keysEnv.DB_PASSWORD}@cluster0.v8qqmsf.mongodb.net/${keysEnv.DB_NAME}?retryWrites=true&w=majority`)
        console.log('')
        console.log(`BASE DE DATOS CONECTADO A "${db.connection.name}" ${db.connection.host}/${db.connection.port}`)
        console.log('------------------------------------------------------------')
        console.log('------------------------------------------------------------')
        console.log('')
    } catch (error) {
        console.log('')
        console.log('------------------------------------------------------------')
        console.log('ERROR EN LA CONEXION EN LA BASE DE DATOS ')
        console.log('------------------------------------------------------------')
        console.log('')
        console.error(error)
    }

})()