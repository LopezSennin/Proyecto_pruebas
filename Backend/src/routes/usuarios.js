const express = require("express");
const usuarioSchema = require("../models/usuarios");

const router = express.Router();

// crear usuario
router.post('/usuarios',() => (req, res) =>{
    const usuario = usuarioSchema(req.body);
    usuario.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));

});

//obtener los usuarios
router.get('/usuarios',() => (req, res) =>{
    usuarioSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));

});

//obtener usuario especifico
router.get('/usuarios/:id',() => (req, res) =>{
    const { id } = req.params;
    usuarioSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));

});

//actualizar usuario especifico
router.put('/usuarios/:id',() => (req, res) =>{
    const { id } = req.params;
    const { name, age, email } = req.body;
    usuarioSchema
    .updateOne({ _id: id}, {$set:{nombre, correo, rol, identificacion}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));

});

//eliminar proyecto especifico
router.delete('/usuarios/:id',() => (req, res) =>{
    const { id } = req.params;
    usuarioSchema
    .remove({ _id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));

});
module.exports = router;