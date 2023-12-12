
import React, {useState} from "react"
function CrearProyecto() {

  const initialState = {
    key: "",
    id_proyecto: "",
    titulo: "",
    id_responsable: "",
    prioridad: "",
    fecha_limite: "",
    fecha_inicio: "",
    resultados: "",
    prueba: "", 
  };
  export const WebsiteForm = (props) => {
    const [website, setWebsite] = useState(initialState);
    const params = useParams();
    const navigate = useNavigate();
  

  const handleInputChange = ({ target: { id_proyecto, value } }) =>
  setWebsite({ ...website, [id_proyecto]: value });

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
              <label className='block font-sans font-medium text-xl'>ID Proyecto</label>
              <input type="text" className="input input-bordered w-full max-w-xs my-2"
              onChange={handleInputChange}/>
              <div className='flex justify-center'>
              </div>  
            </div>

            <div >
              <label className='block font-sans font-medium text-xl'>ID Responsable</label>
              <input type="text" className="input input-bordered w-full max-w-xs my-2" 
              onChange={handleInputChange}/>
              <div className='flex justify-center'>
               {/* 
               <button className="btn">Seleccionar Responsable</button>*/}
              </div>  
            </div>
          
          </form>
            </div>
             <div className='w-6/12'>
         <form>
          <div>
              <label className='block font-sans font-medium text-xl'>Prioridad</label>
              <input type="text" className="input input-bordered w-full max-w-xs my-2"
              onChange={handleInputChange}/>
            </div>

            <div>
              <label className='block font-sans font-medium text-xl'>Fecha inicio</label>
              <input type="date" className="input input-bordered w-full max-w-xs my-2" 
              onChange={handleInputChange}/>
            </div>

          <div>
              <label className='block font-sans font-medium text-xl'>Fecha limite</label>
              <input type="date" className="input input-bordered w-full max-w-xs my-2" 
              onChange={handleInputChange}/>
            </div>

            <div className='flex justify-center'>
              <button className="btn btn-wide">Agregar Proyecto</button>
            </div>
          </form>
        </div>  
      </div>  
  </div>
    
  )
}

export default CrearProyecto
