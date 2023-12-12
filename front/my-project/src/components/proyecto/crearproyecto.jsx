import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; 


const firebaseConfig = {
  apiKey: "AIzaSyBOuO0z0uPBPGMpD87uGiVggKxsEvn2gHg",
  authDomain: "proyectofinal-59b5f.firebaseapp.com",
  databaseURL: "https://proyectofinal-59b5f-default-rtdb.firebaseio.com",
  projectId: "proyectofinal-59b5f",
  storageBucket: "proyectofinal-59b5f.appspot.com",
  messagingSenderId: "1053138897434",
  appId: "1:1053138897434:web:c5495842b2cc096f021fa3"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

function crearproyecto() {
  const [nombreProyecto, setNombreProyecto] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaLimite, setFechaLimite] = useState('');

  const handleAgregarProyecto = async () => {
    try {
      // Objeto con los datos del proyecto
      const proyectoData = {
        nombre: nombreProyecto,
        fechaInicio,
        fechaLimite,
        
      };

      // Agrega el proyecto a la colección 'proyectos'
      await firestore.collection('proyectos').add(proyectoData);

      // Limpiar los campos después de agregar el proyecto
      setNombreProyecto('');
      setFechaInicio('');
      setFechaLimite('');

      console.log('Proyecto agregado con éxito');
    } catch (error) {
      console.error('Error al agregar el proyecto:', error);
    }
  };

  return (
    <div>
      <h1 className='font-sans font-medium text-4xl pb-14 pt-6 text-center'>Crear Proyecto</h1>
      <div className="flex justify-center">
        <form className="w-96">
          <div>
            <label className='block font-sans font-medium text-xl'>Nombre</label>
            <input
              type="text"
              className="input input-bordered w-full my-2"
              value={nombreProyecto}
              onChange={(e) => setNombreProyecto(e.target.value)}
            />
          </div>

          <div>
            <label className='block font-sans font-medium text-xl'>Fecha inicio</label>
            <input
              type="date"
              className="input input-bordered w-full my-2"
              value={fechaInicio}
              onChange={(e) => setFechaInicio(e.target.value)}
            />
          </div>

          <div>
            <label className='block font-sans font-medium text-xl'>Fecha limite</label>
            <input
              type="date"
              className="input input-bordered w-full my-2"
              value={fechaLimite}
              onChange={(e) => setFechaLimite(e.target.value)}
            />
          </div>

          <div>
            <button
              type="button"
              className="btn btn-outline w-full"
              onClick={handleAgregarProyecto}
            >
              Agregar Proyecto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default crearproyecto;