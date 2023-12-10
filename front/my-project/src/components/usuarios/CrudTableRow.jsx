import React from 'react';

/**
 * Componente para representar una fila en la tabla del CRUD.
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.el - Datos del elemento a mostrar en la fila.
 */
const CrudTableRow = ({ el }) => {
  /**
   * Maneja la edición de un elemento.
   * @function
   */
  const handleEdit = () => {
    // Lógica para manejar la edición del elemento (a implementar)
    console.log(`Editar elemento con ID: ${el.id}`);
  }

  /**
   * Maneja la eliminación de un elemento.
   * @function
   */
  const handleDelete = () => {
    // Lógica para manejar la eliminación del elemento (a implementar)
    console.log(`Eliminar elemento con ID: ${el.id}`);
  }

  return (
    <tr>
      <td>{el.id}</td>
      <td>{el.nombre}</td>
      <td>{el.correo}</td>
      <td>
        {/* Botón para editar */}
        <button className="btn btn-outline btn-accent" onClick={handleEdit}>
          Editar
        </button>
        
        {/* Botón para eliminar */}
        <button className="btn btn-outline btn-warning" onClick={handleDelete}>
          Eliminar
        </button>
      </td>
    </tr>
  );
}

export default CrudTableRow;
