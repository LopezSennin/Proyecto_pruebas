import React, { useState } from 'react';

/**
 * Componente para el formulario de CRUD.
 * @component
 */
const CrudForm = () => {
  // Estado para almacenar los datos del formulario
  const [form, setForm] = useState({
    id: null,
    nombre: "",
    correo: ""
  });

  /**
   * Maneja los cambios en los campos del formulario.
   * @param {Object} e - Evento de cambio.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Actualiza el estado del formulario con el nuevo valor
    setForm({
      ...form,
      [name]: value
    });
  }

  /**
   * Maneja el envío del formulario.
   * @param {Object} e - Evento de envío.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de envío de datos (personalizar según necesidades)
    console.log("Datos enviados:", form);
    // Restablece el formulario al estado inicial
    setForm({
      id: null,
      nombre: "",
      correo: ""
    });
  }

  /**
   * Maneja el reinicio del formulario.
   */
  const handleReset = () => {
    // Restablece el formulario al estado inicial
    setForm({
      id: null,
      nombre: "",
      correo: ""
    });
  }

  return (
    <div>
      <h3>Agregar</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          placeholder="ID"
          className="input input-bordered w-full max-w-xs"
          onChange={handleChange}
          value={form.id}
        />
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          className="input input-bordered w-full max-w-xs"
          onChange={handleChange}
          value={form.nombre}
        />
        <input
          type="text"
          name="correo"
          placeholder="Correo"
          className="input input-bordered w-full max-w-xs"
          onChange={handleChange}
          value={form.correo}
        />

        <input type="submit" value="Enviar" className="btn" />
        <input type="reset" value="Limpiar" className="btn" onClick={handleReset} />
      </form>
    </div>
  );
}

export default CrudForm;