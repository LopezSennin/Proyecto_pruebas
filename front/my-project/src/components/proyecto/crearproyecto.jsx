

function Crearproyecto() {
  return (
    <div>
      <h1 className='font-sans font-medium text-4xl pb-14 pt-6 text-center'>Crear Proyecto</h1>      
        <div className="flex justify-center">
          <form >
            
            <div>
              <label className='block font-sans font-medium text-xl'>Nombre</label>
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
              <button className="btn ">Agregar Proyecto</button>
            </div>
   
          </form>
        </div>
      </div>
  )
}

export default Crearproyecto