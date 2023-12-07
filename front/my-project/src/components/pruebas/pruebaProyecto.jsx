

export const PruebaProyecto = ({props}) => {
    const {titulo, id_responsable, prioridad, fecha_limete, resultados} = props.prueba
    const responsable = id_responsable /// Aqui se debe hacer una consulta a la base de datos para obtener el nombre del responsable
    return (
        <div className="collapse bg-base-200">
            <input type="checkbox" /> 
            <div className="collapse-title text-xl font-medium">
                {titulo}
            </div>
            <div className="collapse-content grid gap-x-8 gap-y-4 grid-cols-2"> 
                <p>Nombre de responsable: {responsable}</p>
                <p>Nivel de prioridad: {prioridad}</p>
                <p>Fecha limite de entrega: {fecha_limete}</p>
                <p>Resultado de la prueba: {resultados} </p>
                <button className="btn btn-outline col-span-2">Detalle</button>
            </div>
        </div>
    )
}