import { PruebaProyecto } from "../pruebas/pruebaProyecto";


const Proyecto = ({props}) => {

    const {codigo, nombre, descripcion, fechaLimite, pruebas} = props.proyecto

    return (
        <div className="card bordered shadow-lg">
            <div className="card-body">
                <h2 className="card-title">{nombre}</h2>
                <p className="card-text">{descripcion}</p>
                <p className="badge badge-primary">Fecha limite: {fechaLimite}</p>
                <div className="card-actions">
                    <h1>Pruebas:</h1>
                    <div className="accordion">
                        {pruebas.map((prueba) => (
                            <PruebaProyecto prueba={prueba} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proyecto;