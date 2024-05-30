import { Router } from "express";
const router = Router();
import * as EntidadControllers from '../controllers/Entidades.controller'

//CRUD DE ENTIDADES DE PETS
router.post('/create', EntidadControllers.createEntidad)
router.get('/', EntidadControllers.getEntidades)
router.get('/:id',EntidadControllers.getEntidad)
router.put('/:id/edit', EntidadControllers.updateEntidad)
router.delete('/:id/edit', EntidadControllers.deleteEntidad)

export default router;