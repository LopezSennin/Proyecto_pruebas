const { json } = require("express");
const mongoose = require("mongoose");

const tareaSchema = mongoose.Schema({
    id: {
      type: Number,
      required: true,
    },
    titulo: {
      type: String,
      required: true,
    },
    tipo_prueba: String,
    descripcion: String,
    pasos_a_seguir: String,
    datos_de_prueba: String, // Puedes cambiarlo según tus necesidades
    expectativas: String,
    id_responsable: {
      type: Number,
      required: true,
    },
    fecha_inicio: String,
    fecha_limite: String,
    prioridad: String,
    resultados: {
      type: String,
      enum: ["Éxito", "Fallo", "En proceso"],
    },
    evidencia: String, // Puedes cambiarlo según tus necesidades
    informe: String,
  });

const proyectoSchema = mongoose.Schema({
    nombreProyecto:{
        type: String,
        required: true
    },
    
    fechaInicio:{
        type: String,
        required: true
    },
    fechaEntrega:{
        type: String,
        required: true
    },
    tareas: [tareaSchema],

});

module.exports = mongoose.model('Proyecto', proyectoSchema);





