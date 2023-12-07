import { PruebaProyecto } from "../pruebas/pruebaProyecto";


const Proyecto = (props) => {

    

    return (
        <div className="card bordered shadow-lg">
            <div className="card-body">
                <h2 className="card-title">{props.nombre}</h2>
                <p className="card-text">{props.descripcion}</p>
                <p className="badge badge-primary">Fecha limite: {props.fechaLimite}</p>
                <div className="card-actions">
                    <h1>Pruebas:</h1>
                    <div className="accordion">
                        {props.pruebas.map((prueba) => {
                            console.log(prueba);
                            //return(
                                //<PruebaProyecto prueba={props.prueba} />
                            //);
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proyecto;