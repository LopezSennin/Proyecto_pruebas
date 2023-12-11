
import React, {useState} from "react"
function CrearProyecto() {

  const initialState = {
    key: "",
    id_proyecto: "",
    id_prueba: "",
    titulo: "",
    id_responsable: "",
    prioridad: "",
    fecha_limite: "",
    fecha_inicio: "",
    resultados: "",
    prueba: "", 
  };

  const handleInputChange = ({ target: { key, value } }) =>
  setWebsite({ ...website, [key]: value });
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validURL(website.url))
      return toast("invalid url", { type: "warning", autoClose: 1000 })

    if (!params.id) {
      await saveWebsite(website)
      toast("New Link Added", {
        type: "success",
      });
    } else {
      await updateWebsite(params.id, website)
      toast("Updated", {
        type: "success",
      })
    }

    // Clean Form
    setWebsite(initialState)
    navigate("/")
  }


  return (
    <div>
      <h1 className='font-sans font-medium text-4xl pb-14 pt-6 text-center'>Añadir Proyecto</h1>
      <div className="flex justify-center space-x-20">
        <div className='flex'>
          <form className='w-full' onSubmit={handleSubmit}>
            {/*
            <div>
              <label className='font-sans font-medium text-xl'>ID Prueba</label>
              <input type="text" className="input input-bordered w-full max-w-xs my-2" />
            </div>
            */}
            <div>
              <label className='block font-sans font-medium text-xl'>Titulo</label>
              <input type="text" className="input input-bordered w-full max-w-xs my-2" 
                onChange={handleInputChange}/>

            </div>

            <div >
              <label className='block font-sans font-medium text-xl'>Proyecto</label>
              <input type="text" className="input input-bordered w-full max-w-xs my-2" disabled />
              <div className='flex justify-center'>
                <button className="btn">Seleccionar Proyecto</button>
              </div>  
            </div>

            <div >
              <label className='block font-sans font-medium text-xl'>Responsable</label>
              <input type="text" className="input input-bordered w-full max-w-xs my-2" disabled />
              <div className='flex justify-center'>
                <button className="btn">Seleccionar Responsable</button>
              </div>  
            </div>

            <div>
              <label className='block font-sans font-medium text-xl'>Datos</label>
              <input type="text" className="input input-bordered w-full max-w-xs my-2" />
            </div>

            <div>
              <label className='block font-sans font-medium text-xl'>Fecha inicio</label>
              <input type="date" className="input input-bordered w-full max-w-xs my-2" />
            </div>

            <div>
              <label className='block font-sans font-medium text-xl'>Fecha limite</label>
              <input type="date" className="input input-bordered w-full max-w-xs my-2" />
            </div>

            <div>
              <label className='block font-sans font-medium text-xl'>Prioridad</label>
              <select className="font-sans select select-bordered w-full max-w-xs my-2">
                <option>Alta</option>
                <option>Media</option>
                <option>Baja</option>
              </select>
            </div>

            <div>
              <label className='block font-sans font-medium text-xl'>Resultado</label>
              <select className="font-sans select select-bordered w-full max-w-xs my-2">
                <option>Exito</option>
                <option>Fallo</option>
                <option>En proceso</option>
              </select>
            </div>

            <div>
              <label className='block font-sans font-medium text-xl'>Evidencia</label>
              <input type="text" className="input input-bordered w-full max-w-xs my-2" />
            </div>

            <div>
              <label className='font-sans font-medium text-xl'>Descripción</label>
              <textarea className="h-64 textarea textarea-bordered my-2 w-full "></textarea>
            </div> 

          </form>
        </div>
        <div className='w-6/12'>
          <form>

            <div>
              <label className='font-sans font-medium text-xl'>Expectativas</label>
              <textarea className="h-64 textarea textarea-bordered my-2 w-full "></textarea>
            </div> 

            <div>
              <label className='font-sans font-medium text-xl'>Pasos a Seguir</label>
              <textarea className="h-64 textarea textarea-bordered my-2 w-full "></textarea>
            </div> 

            <div>
              <label className='font-sans font-medium text-xl'>Informe</label>
              <textarea className="h-64 textarea textarea-bordered my-2 w-full "></textarea>
            </div>

            <div className='flex justify-center'>
              <button className="btn btn-wide">Agregar Prueba</button>
            </div>
          </form>
        </div>  
      </div>  
  </div>
    
  )
}

export default CrearProyecto
