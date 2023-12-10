const express = require("express");
const proyectoSchema = require("../models/proyectos")

const router = express.Router();

// crear proyecto
router.post('/proyectos',() => (req, res) =>{
    const proyecto = proyectoSchema(req.body);
    proyecto.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));

});

//obtener los proyectos
router.get('/proyectos',() => (req, res) =>{
    proyectoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));

});

//obtener proyecto especifico
router.get('/proyectos/:id',() => (req, res) =>{
    const { id } = req.params;
    proyectoSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));

});

//actualizar proyecto especifico
router.put('/proyectos/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const proyectoActualizado = await Proyecto.findByIdAndUpdate(id, req.body, { new: true });
      res.json(proyectoActualizado);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el proyecto', details: error.message });
    }
  });

//eliminar proyecto especifico
router.delete('/proyectos/:id',() => (req, res) =>{
    const { id } = req.params;
    proyectoSchema
    .remove({ _id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));

});
module.exports = router;