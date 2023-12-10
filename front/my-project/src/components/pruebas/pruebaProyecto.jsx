import { Link, useLocation } from 'react-router-dom';

export const PruebaProyecto = (props) => {
    const id_prueba = props.id_prueba;
    const id_proyecto = props.id_proyecto;
    const responsable = props.id_responsable /// Aqui se debe hacer una consulta a la base de datos para obtener el nombre del responsable
    return (
        <div className="collapse bg-base-200">
            <input type="checkbox" /> 
            <div className="collapse-title text-xl font-medium">
                {props.titulo}
            </div>
            <div className="collapse-content grid gap-x-8 gap-y-4 grid-cols-2"> 
                <p>Id de la prueba: {id_prueba}</p>
                <p>Nombre de responsable: {responsable}</p>
                <p>Nivel de prioridad: {props.prioridad}</p>
                <p>Fecha de inicio: {props.fecha_inicio}</p>
                <p>Fecha limite de entrega: {props.fecha_limete}</p>
                <p>Resultado de la prueba: {props.resultados} </p>
                {/*<button to="/CrudPruebas/CrearPrueba" className="btn btn-outline col-span-2">Detalle</button>*/}
                <Link to="/CrudPruebas/Detalles"className="btn btn-outline col-span-2">Detalle</Link>

            </div>
        </div>
    )
}