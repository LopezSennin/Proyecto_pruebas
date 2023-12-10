import { PruebaProyecto } from "../pruebas/pruebaProyecto";
import { Link } from 'react-router-dom';

const Proyecto = (props) => {

    const codigo = props.codigo;

    return (
        <div className="card bordered shadow-lg">
            <div className="card-body">
                <h2 className="card-title">{props.nombre}</h2>
                <p className="card-text">{props.descripcion}</p>
                <p className="badge badge-primary">Fecha limite: {props.fechaLimite}</p>
                <div className="">
                    <h1>Pruebas: </h1>
                    <div className>
                        {props.pruebas.map((prueba) => {
                            return(
                                <PruebaProyecto 
                                key={prueba.id_prueba}
                                id_proyecto={codigo}
                                id_prueba={prueba.id_prueba}
                                titulo={prueba.titulo}
                                id_responsable={prueba.id_responsable}
                                prioridad={prueba.prioridad}
                                fecha_limite={prueba.fecha_limite}
                                fecha_inicio={prueba.fecha_inicio}
                                resultados={prueba.resultados}
                                prueba={prueba} 
                                />
                            );
                        })}
                    </div>
                </div>
                <Link to="/CrudPruebas/CrearPrueba" className="btn">Crear prueba</Link>
            </div>
        </div>
    )
}

export default Proyecto;