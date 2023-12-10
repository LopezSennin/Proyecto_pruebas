const { json } = require("express");
const mongoose = require("mongoose");

const usuarioSchema = mongoose.Schema({
    nombreUsuario:{
        type: String,
        required: true
    },
    correo:{
        type: String,
        required: true
    },
    rol:{
        type: String,
        required: true
    },
    identificacion:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema);