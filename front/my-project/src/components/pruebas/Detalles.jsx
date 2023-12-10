import { Link, useLocation } from 'react-router-dom';

function Detalles() {
    return (
        <div>
            <h1 className='font-sans font-medium text-4xl pb-14 pt-6 text-center'>Detalles</h1>
            <div className="flex justify-center space-x-20">
                <div className='flex'>
                    <form className='w-full'>
                        {/*
                        <div>
                            <label className='font-sans font-medium text-xl'>ID Prueba</label>
                            <input type="text" className="input input-bordered w-full max-w-xs my-2" />
                            </div>
                        */}
                        <div>
                            <label className='block font-sans font-medium text-xl'>Titulo</label>
                            <input type="text" className="input input-bordered w-full max-w-xs my-2" disabled/>
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
                            <input type="text" className="input input-bordered w-full max-w-xs my-2" placeholder="URL" disabled />
                        </div>

                        <div>
                            <label className='block font-sans font-medium text-xl'>Fecha inicio</label>
                            <input type="date" className="input input-bordered w-full max-w-xs my-2" disabled />
                        </div>

                        <div>
                            <label className='block font-sans font-medium text-xl'>Fecha limite</label>
                            <input type="date" className="input input-bordered w-full max-w-xs my-2" disabled />
                        </div>

                        <div>
                            <label className='block font-sans font-medium text-xl'>Prioridad</label>
                            <select className="font-sans select select-bordered w-full max-w-xs my-2" disabled>
                                <option>Alta</option>
                                <option>Media</option>
                                <option>Baja</option>
                            </select>
                        </div>

                        <div>
                            <label className='block font-sans font-medium text-xl'>Fase</label>
                            <select className="font-sans select select-bordered w-full max-w-xs my-2" disabled>
                                <option>Requisitos</option>
                                <option>Planificacion</option>
                                <option>Analisis</option>
                                <option>Diseño</option>
                                <option>Implementacion</option>
                                <option>Ejecucion</option>
                                <option>Conclusion</option>
                                <option>Cierre</option>
                            </select>
                        </div>

                        <div>
                            <label className='block font-sans font-medium text-xl'>Resultado</label>
                            <select className="font-sans select select-bordered w-full max-w-xs my-2" disabled>
                                <option>Exito</option>
                                <option>Fallo</option>
                                <option>En proceso</option>
                            </select>
                        </div>

                        <div>
                            <label className='block font-sans font-medium text-xl'>Evidencia</label>
                            <input type="text" className="input input-bordered w-full max-w-xs my-2" placeholder="URL" disabled/>
                        </div>

                        <div>
                            <label className='font-sans font-medium text-xl'>Descripción</label>
                            <textarea className="h-64 textarea textarea-bordered my-2 w-full " disabled></textarea>
                        </div> 

                    </form>
                </div>
                <div className='w-6/12'>
                    <form>

                        <div>
                            <label className='font-sans font-medium text-xl'>Expectativas</label>
                            <textarea className="h-64 textarea textarea-bordered my-2 w-full " disabled></textarea>
                        </div> 

                        <div>
                            <label className='font-sans font-medium text-xl'>Pasos a Seguir</label>
                            <textarea className="h-64 textarea textarea-bordered my-2 w-full " disabled></textarea>
                        </div> 

                        <div>
                            <label className='font-sans font-medium text-xl'>Informe</label>
                            <textarea className="h-64 textarea textarea-bordered my-2 w-full " disabled></textarea>
                        </div>

                        <div className='flex justify-center'>
                            <Link to="/CrudPruebas/Editar"className="btn btn-wide">Editar</Link>
                        </div>
                    </form>
                </div>  
            </div>  
        </div>
    )
}

export default Detalles