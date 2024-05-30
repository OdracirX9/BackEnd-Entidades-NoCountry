import { RequestHandler } from "express";
import EntidadesCollection from '../models/Entidades.models'


export const createEntidad: RequestHandler = async (req, res)=>{
    try {

        const newEntidad = new EntidadesCollection(req.body)
        const saveEntidad = await newEntidad.save()
        res.json(saveEntidad)

    } catch (error) {
        console.log(error)
    }
}

export const getEntidades: RequestHandler = async (req, res)=>{
    try {
        const entidades = await EntidadesCollection.find()

        return res.json(entidades)

    } catch (error) {
        res.json(error)
    }
}

export const getEntidad: RequestHandler = async (req, res)=>{
    try{
        const entidadFound = await EntidadesCollection.findById(req.params.id)
        if(entidadFound){
            return res.json(entidadFound)
        }
        console.log(entidadFound)
        return res.json([{message:"La entidad no fue encontrada"}])
    }catch(error){

        res.status(204).json(error)
    }

}

export const updateEntidad: RequestHandler = async (req, res)=>{
    try {
        const entidadUpdate = await EntidadesCollection.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.json(entidadUpdate)
    } catch (error) {

        res.status(204).json(error)
    }

}

export const deleteEntidad: RequestHandler = async (req, res)=>{
    try {
        const entidadUpdate = await EntidadesCollection.findByIdAndDelete(req.params.id)
        res.json(entidadUpdate)
    } catch (error) {
        
        res.status(204).json(error)
    }
}