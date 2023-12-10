import React from 'react';
import CrudTableRow from './CrudTableRow';

/**
 * Componente para la tabla de datos en el CRUD.
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {Array} props.data - Datos a mostrar en la tabla.
 */
const CrudTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* Cabecera de la tabla */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
          {/* Renderizar filas de datos o mensaje de "Sin datos" */}
          {data.length === 0 ? (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          ) : (
            // Mapear datos para renderizar filas de la tabla
            data.map((el) => <CrudTableRow key={el.id} el={el} />)
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CrudTable;
