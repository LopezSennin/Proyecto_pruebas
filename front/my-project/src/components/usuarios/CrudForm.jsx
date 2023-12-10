import React, { useState } from 'react';


const CrudForm = () => {
  // Estado para almacenar los datos del formulario
  const [form, setForm] = useState({
    id: null,
    nombre: "",
    correo: ""
  });



  return (
    <form className='w-full'>
            
            <div>
              <label className='block font-sans font-medium text-xl'>Identificación Usuario</label>
              <input type="text" className="input input-bordered w-full max-w-xs my-2" />
            </div>

            <div >
              <label className='block font-sans font-medium text-xl'>Nombre</label>
              <input type="text" className="input input-bordered w-full max-w-xs my-2"/>
            </div>

            <div>
              <label className='block font-sans font-medium text-xl'>Correo electrónico</label>
              <input type="text" className="input input-bordered w-full max-w-xs my-2"/>
            </div>

            <div>
              <label className='block font-sans font-medium text-xl'>Rol</label>
              <select className="font-sans select select-bordered w-full max-w-xs my-2">
                <option>Desarrollador</option>
                <option>"QA" Quality Assurance</option>
                <option>Scrum Master</option>
              </select>
            </div>
            <button className='btn btn-primary w-full'>Crear Usuario</button>
          </form>
  );
}

export default CrudForm;