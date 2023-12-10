import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

/**
 * Componente principal para el CRUD de usuarios.
 * @component
 */
const CrudUsuario = () => {
  // Estado para almacenar la base de datos de usuarios
  const [db, setDb] = useState([
    {
      id: 1,
      nombre: "Joan",
      correo: "joan@mail.com",
    },
    {
      id: 2,
      nombre: "Luis",
      correo: "luis@mail.com",
    },
  ]);

  return (
    <div>
      <h1 className='font-sans font-medium text-4xl pb-14 pt-6 text-center'>Usuarios</h1>
      <div className="flex justify-center space-x-20">
        <div className='flex flex-col'>
          <CrudForm />
        </div>
        <div className='w-6/12'>
          <CrudTable data={db} />
        </div>
      </div>
      
      
    </div>
  );
}

export default CrudUsuario;