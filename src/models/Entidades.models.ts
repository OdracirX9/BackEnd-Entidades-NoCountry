import {Schema, model} from 'mongoose'

const EntidadesSchema = new Schema({
    nombre:{
        type:String,
        require:true,
        trim:true
    },
    direccion:{
        type:String,
        require:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        trim:true
    },
    telefono:{
        type:Number,
        require:true,
        trim:true
    },
    ubicacion:{
        type:String,
        require:true,
        trim:true
    },
    images:{
        type:[String],
        validator:(e: string[])=> e.length <= 5
    
    }
},{
    versionKey:false,
    timestamps:true
})

export default model('Entidades', EntidadesSchema);