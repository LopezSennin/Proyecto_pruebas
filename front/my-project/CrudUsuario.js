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
      <h2>Crud Usuario</h2>
      {/* Componente para agregar/editar usuarios */}
      <CrudForm />

      {/* Componente para mostrar la tabla de usuarios */}
      <CrudTable data={db} />
    </div>
  );
}

export default CrudUsuario;