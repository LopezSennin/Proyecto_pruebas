import { useState } from "react";
import Proyecto from "../components/proyecto/proyecto";

const HomeProyectos = () => {

    const [proyectos, setProyectos] = useState([
        
            {
                codigo: "1",
                nombre: "Proyecto 1",
                descripcion: "Este es el proyecto 1",
                fechaLimite: "2021-10-10",
                pruebas: 
                    [
                        {
                            id_prueba:"1",
                            titulo: "Prueba 1",
                            tipo_prueba: "Prueba de caja negra",
                            descripcion: "Esta es la prueba 1",
                            pasos_a_seguir: "1. Ingresar al sistema con el usuario y contraseña del administrador. 2. Seleccionar la opción de proyectos. 3. Seleccionar la opción de crear proyecto. 4. Ingresar los datos del proyecto. 5. Guardar los datos del proyecto. 6. Verificar que el proyecto se haya creado correctamente. 7. Seleccionar la opción de proyectos. 8. Seleccionar la opción de editar proyecto. 9. Ingresar los datos del proyecto. 10. Guardar los datos del proyecto. 11. Verificar que el proyecto se haya editado correctamente. 12. Seleccionar la opción de proyectos. 13. Seleccionar la opción de eliminar proyecto. 14. Verificar que el proyecto se haya eliminado correctamente.",
                            datos_de_prueba: "url couldinary",
                            expectativas: "Se espera que el proyecto se cree, edite y elimine correctamente.",
                            fase:   "Terminada",
                            id_responsable: "a1",
                            fecha_inicio: "2021-10-10",
                            fecha_limete: "2021-11-10",
                            prioridad: "Alta prioridad",
                            resultados:  "En proceso",
                            evidencia: "url couldinary",
                            informe: "en proceso"

                        },
                        {
                            id_prueba:"2",
                            titulo: "Prueba 2",
                            tipo_prueba: "Prueba de caja negra",
                            descripcion: "Esta es la prueba 2",
                            pasos_a_seguir: "1. Ingresar al sistema con el usuario y contraseña del administrador. 2. Seleccionar la opción de proyectos. 3. Seleccionar la opción de crear proyecto. 4. Ingresar los datos del proyecto. 5. Guardar los datos del proyecto. 6. Verificar que el proyecto se haya creado correctamente. 7. Seleccionar la opción de proyectos. 8. Seleccionar la opción de editar proyecto. 9. Ingresar los datos del proyecto. 10. Guardar los datos del proyecto. 11. Verificar que el proyecto se haya editado correctamente. 12. Seleccionar la opción de proyectos. 13. Seleccionar la opción de eliminar proyecto. 14. Verificar que el proyecto se haya eliminado correctamente.",
                            datos_de_prueba: "url couldinary",
                            expectativas: "Se espera que el proyecto se cree, edite y elimine correctamente.",
                            fase:   "Terminada",
                            id_responsable: "a1",
                            fecha_inicio: "2021-10-10",
                            fecha_limete: "2021-11-10",
                            prioridad: "Alta prioridad",
                            resultados:  "En proceso",
                            evidencia: "url couldinary",
                            informe: "en proceso"
                        },
                        {
                            id_prueba:"3",
                            titulo: "Prueba 3",
                            tipo_prueba: "Prueba de caja negra",
                            descripcion: "Esta es la prueba 3",
                            pasos_a_seguir: "1. Ingresar al sistema con el usuario y contraseña del administrador. 2. Seleccionar la opción de proyectos. 3. Seleccionar la opción de crear proyecto. 4. Ingresar los datos del proyecto. 5. Guardar los datos del proyecto. 6. Verificar que el proyecto se haya creado correctamente. 7. Seleccionar la opción de proyectos. 8. Seleccionar la opción de editar proyecto. 9. Ingresar los datos del proyecto. 10. Guardar los datos del proyecto. 11. Verificar que el proyecto se haya editado correctamente. 12. Seleccionar la opción de proyectos. 13. Seleccionar la opción de eliminar proyecto. 14. Verificar que el proyecto se haya eliminado correctamente.",
                            datos_de_prueba: "url couldinary",
                            expectativas: "Se espera que el proyecto se cree, edite y elimine correctamente.",
                            fase:   "Terminada",
                            id_responsable: "a1",
                            fecha_inicio: "2021-10-10",
                            fecha_limete: "2021-11-10",
                            prioridad: "Alta prioridad",
                            resultados:  "En proceso",
                            evidencia: "url couldinary",
                            informe: "en proceso"
                        }                        
                    ]    
            },
            {
                codigo: "2",
                nombre: "Proyecto 2",
                descripcion: "Este es el proyecto 2",
                fechaLimite: "2021-10-10",
                pruebas: 
                    [
                        {
                            id_prueba:"1",
                            titulo: "Prueba 1",
                            tipo_prueba: "Prueba de caja negra",
                            descripcion: "Esta es la prueba 1",
                            pasos_a_seguir: "1. Ingresar al sistema con el usuario y contraseña del administrador. 2. Seleccionar la opción de proyectos. 3. Seleccionar la opción de crear proyecto. 4. Ingresar los datos del proyecto. 5. Guardar los datos del proyecto. 6. Verificar que el proyecto se haya creado correctamente. 7. Seleccionar la opción de proyectos. 8. Seleccionar la opción de editar proyecto. 9. Ingresar los datos del proyecto. 10. Guardar los datos del proyecto. 11. Verificar que el proyecto se haya editado correctamente. 12. Seleccionar la opción de proyectos. 13. Seleccionar la opción de eliminar proyecto. 14. Verificar que el proyecto se haya eliminado correctamente.",
                            datos_de_prueba: "url couldinary",
                            expectativas: "Se espera que el proyecto se cree, edite y elimine correctamente.",
                            fase:   "Terminada",
                            id_responsable: "a1",
                            fecha_inicio: "2021-10-10",
                            fecha_limete: "2021-11-10",
                            prioridad: "Alta prioridad",
                            resultados:  "En proceso",
                            evidencia: "url couldinary",
                            informe: "en proceso"

                        },
                        {
                            id_prueba:"2",
                            titulo: "Prueba 2",
                            tipo_prueba: "Prueba de caja negra",
                            descripcion: "Esta es la prueba 2",
                            pasos_a_seguir: "1. Ingresar al sistema con el usuario y contraseña del administrador. 2. Seleccionar la opción de proyectos. 3. Seleccionar la opción de crear proyecto. 4. Ingresar los datos del proyecto. 5. Guardar los datos del proyecto. 6. Verificar que el proyecto se haya creado correctamente. 7. Seleccionar la opción de proyectos. 8. Seleccionar la opción de editar proyecto. 9. Ingresar los datos del proyecto. 10. Guardar los datos del proyecto. 11. Verificar que el proyecto se haya editado correctamente. 12. Seleccionar la opción de proyectos. 13. Seleccionar la opción de eliminar proyecto. 14. Verificar que el proyecto se haya eliminado correctamente.",
                            datos_de_prueba: "url couldinary",
                            expectativas: "Se espera que el proyecto se cree, edite y elimine correctamente.",
                            fase:   "Terminada",
                            id_responsable: "a1",
                            fecha_inicio: "2021-10-10",
                            fecha_limete: "2021-11-10",
                            prioridad: "Alta prioridad",
                            resultados:  "En proceso",
                            evidencia: "url couldinary",
                            informe: "en proceso"
                        },
                        {
                            id_prueba:"3",
                            titulo: "Prueba 3",
                            tipo_prueba: "Prueba de caja negra",
                            descripcion: "Esta es la prueba 3",
                            pasos_a_seguir: "1. Ingresar al sistema con el usuario y contraseña del administrador. 2. Seleccionar la opción de proyectos. 3. Seleccionar la opción de crear proyecto. 4. Ingresar los datos del proyecto. 5. Guardar los datos del proyecto. 6. Verificar que el proyecto se haya creado correctamente. 7. Seleccionar la opción de proyectos. 8. Seleccionar la opción de editar proyecto. 9. Ingresar los datos del proyecto. 10. Guardar los datos del proyecto. 11. Verificar que el proyecto se haya editado correctamente. 12. Seleccionar la opción de proyectos. 13. Seleccionar la opción de eliminar proyecto. 14. Verificar que el proyecto se haya eliminado correctamente.",
                            datos_de_prueba: "url couldinary",
                            expectativas: "Se espera que el proyecto se cree, edite y elimine correctamente.",
                            fase:   "Terminada",
                            id_responsable: "a1",
                            fecha_inicio: "2021-10-10",
                            fecha_limete: "2021-11-10",
                            prioridad: "Alta prioridad",
                            resultados:  "En proceso",
                            evidencia: "url couldinary",
                            informe: "en proceso"
                        }  
                    ]    
            },
            {
                codigo: "3",
                nombre: "Proyecto 3",
                descripcion: "Este es el proyecto 3",
                fechaLimite: "2021-10-10",
                pruebas: 
                [
                    {
                        id_prueba:"1",
                        titulo: "Prueba 1",
                        tipo_prueba: "Prueba de caja negra",
                        descripcion: "Esta es la prueba 1",
                        pasos_a_seguir: "1. Ingresar al sistema con el usuario y contraseña del administrador. 2. Seleccionar la opción de proyectos. 3. Seleccionar la opción de crear proyecto. 4. Ingresar los datos del proyecto. 5. Guardar los datos del proyecto. 6. Verificar que el proyecto se haya creado correctamente. 7. Seleccionar la opción de proyectos. 8. Seleccionar la opción de editar proyecto. 9. Ingresar los datos del proyecto. 10. Guardar los datos del proyecto. 11. Verificar que el proyecto se haya editado correctamente. 12. Seleccionar la opción de proyectos. 13. Seleccionar la opción de eliminar proyecto. 14. Verificar que el proyecto se haya eliminado correctamente.",
                        datos_de_prueba: "url couldinary",
                        expectativas: "Se espera que el proyecto se cree, edite y elimine correctamente.",
                        fase:   "Terminada",
                        id_responsable: "a1",
                        fecha_inicio: "2021-10-10",
                        fecha_limete: "2021-11-10",
                        prioridad: "Alta prioridad",
                        resultados:  "En proceso",
                        evidencia: "url couldinary",
                        informe: "en proceso"

                    },
                    {
                        id_prueba:"2",
                        titulo: "Prueba 2",
                        tipo_prueba: "Prueba de caja negra",
                        descripcion: "Esta es la prueba 2",
                        pasos_a_seguir: "1. Ingresar al sistema con el usuario y contraseña del administrador. 2. Seleccionar la opción de proyectos. 3. Seleccionar la opción de crear proyecto. 4. Ingresar los datos del proyecto. 5. Guardar los datos del proyecto. 6. Verificar que el proyecto se haya creado correctamente. 7. Seleccionar la opción de proyectos. 8. Seleccionar la opción de editar proyecto. 9. Ingresar los datos del proyecto. 10. Guardar los datos del proyecto. 11. Verificar que el proyecto se haya editado correctamente. 12. Seleccionar la opción de proyectos. 13. Seleccionar la opción de eliminar proyecto. 14. Verificar que el proyecto se haya eliminado correctamente.",
                        datos_de_prueba: "url couldinary",
                        expectativas: "Se espera que el proyecto se cree, edite y elimine correctamente.",
                        fase:   "Terminada",
                        id_responsable: "a1",
                        fecha_inicio: "2021-10-10",
                        fecha_limete: "2021-11-10",
                        prioridad: "Alta prioridad",
                        resultados:  "En proceso",
                        evidencia: "url couldinary",
                        informe: "en proceso"
                    },
                    {
                        id_prueba:"3",
                        titulo: "Prueba 3",
                        tipo_prueba: "Prueba de caja negra",
                        descripcion: "Esta es la prueba 3",
                        pasos_a_seguir: "1. Ingresar al sistema con el usuario y contraseña del administrador. 2. Seleccionar la opción de proyectos. 3. Seleccionar la opción de crear proyecto. 4. Ingresar los datos del proyecto. 5. Guardar los datos del proyecto. 6. Verificar que el proyecto se haya creado correctamente. 7. Seleccionar la opción de proyectos. 8. Seleccionar la opción de editar proyecto. 9. Ingresar los datos del proyecto. 10. Guardar los datos del proyecto. 11. Verificar que el proyecto se haya editado correctamente. 12. Seleccionar la opción de proyectos. 13. Seleccionar la opción de eliminar proyecto. 14. Verificar que el proyecto se haya eliminado correctamente.",
                        datos_de_prueba: "url couldinary",
                        expectativas: "Se espera que el proyecto se cree, edite y elimine correctamente.",
                        fase:   "Terminada",
                        id_responsable: "a1",
                        fecha_inicio: "2021-10-10",
                        fecha_limete: "2021-11-10",
                        prioridad: "Alta prioridad",
                        resultados:  "En proceso",
                        evidencia: "url couldinary",
                        informe: "en proceso"
                    }  
                ]
            },
            {
                codigo: "4",
                nombre: "Proyecto 4",
                descripcion: "Este es el proyecto 4",
                fechaLimite: "2021-10-10",
                pruebas: 
                [
                    {
                        id_prueba:"1",
                        titulo: "Prueba 1",
                        tipo_prueba: "Prueba de caja negra",
                        descripcion: "Esta es la prueba 1",
                        pasos_a_seguir: "1. Ingresar al sistema con el usuario y contraseña del administrador. 2. Seleccionar la opción de proyectos. 3. Seleccionar la opción de crear proyecto. 4. Ingresar los datos del proyecto. 5. Guardar los datos del proyecto. 6. Verificar que el proyecto se haya creado correctamente. 7. Seleccionar la opción de proyectos. 8. Seleccionar la opción de editar proyecto. 9. Ingresar los datos del proyecto. 10. Guardar los datos del proyecto. 11. Verificar que el proyecto se haya editado correctamente. 12. Seleccionar la opción de proyectos. 13. Seleccionar la opción de eliminar proyecto. 14. Verificar que el proyecto se haya eliminado correctamente.",
                        datos_de_prueba: "url couldinary",
                        expectativas: "Se espera que el proyecto se cree, edite y elimine correctamente.",
                        fase:   "Terminada",
                        id_responsable: "a1",
                        fecha_inicio: "2021-10-10",
                        fecha_limete: "2021-11-10",
                        prioridad: "Alta prioridad",
                        resultados:  "En proceso",
                        evidencia: "url couldinary",
                        informe: "en proceso"

                    },
                    {
                        id_prueba:"2",
                        titulo: "Prueba 2",
                        tipo_prueba: "Prueba de caja negra",
                        descripcion: "Esta es la prueba 2",
                        pasos_a_seguir: "1. Ingresar al sistema con el usuario y contraseña del administrador. 2. Seleccionar la opción de proyectos. 3. Seleccionar la opción de crear proyecto. 4. Ingresar los datos del proyecto. 5. Guardar los datos del proyecto. 6. Verificar que el proyecto se haya creado correctamente. 7. Seleccionar la opción de proyectos. 8. Seleccionar la opción de editar proyecto. 9. Ingresar los datos del proyecto. 10. Guardar los datos del proyecto. 11. Verificar que el proyecto se haya editado correctamente. 12. Seleccionar la opción de proyectos. 13. Seleccionar la opción de eliminar proyecto. 14. Verificar que el proyecto se haya eliminado correctamente.",
                        datos_de_prueba: "url couldinary",
                        expectativas: "Se espera que el proyecto se cree, edite y elimine correctamente.",
                        fase:   "Terminada",
                        id_responsable: "a1",
                        fecha_inicio: "2021-10-10",
                        fecha_limete: "2021-11-10",
                        prioridad: "Alta prioridad",
                        resultados:  "En proceso",
                        evidencia: "url couldinary",
                        informe: "en proceso"
                    },
                    {
                        id_prueba:"3",
                        titulo: "Prueba 3",
                        tipo_prueba: "Prueba de caja negra",
                        descripcion: "Esta es la prueba 3",
                        pasos_a_seguir: "1. Ingresar al sistema con el usuario y contraseña del administrador. 2. Seleccionar la opción de proyectos. 3. Seleccionar la opción de crear proyecto. 4. Ingresar los datos del proyecto. 5. Guardar los datos del proyecto. 6. Verificar que el proyecto se haya creado correctamente. 7. Seleccionar la opción de proyectos. 8. Seleccionar la opción de editar proyecto. 9. Ingresar los datos del proyecto. 10. Guardar los datos del proyecto. 11. Verificar que el proyecto se haya editado correctamente. 12. Seleccionar la opción de proyectos. 13. Seleccionar la opción de eliminar proyecto. 14. Verificar que el proyecto se haya eliminado correctamente.",
                        datos_de_prueba: "url couldinary",
                        expectativas: "Se espera que el proyecto se cree, edite y elimine correctamente.",
                        fase:   "Terminada",
                        id_responsable: "a1",
                        fecha_inicio: "2021-10-10",
                        fecha_limete: "2021-11-10",
                        prioridad: "Alta prioridad",
                        resultados:  "En proceso",
                        evidencia: "url couldinary",
                        informe: "en proceso"
                    }  
                ]
            }
        ]);
    

    return (
        <div>
            <p className='font-sans font-medium text-4xl pb-14 pt-6 text-center'>Proyectos</p>
            <div className="accordion flex-col object-center">
                {proyectos.map((proyecto) => {
                    return(
                        <div>
                            <Proyecto 
                                key={proyecto.codigo}
                                codigo={proyecto.codigo} 
                                nombre={proyecto.nombre}
                                descripcion={proyecto.descripcion}
                                fechaLimite={proyecto.fechaLimite}
                                pruebas={proyecto.pruebas}    
                            />
                            <br />
                        </div>
                        
                    
                    );
                })}
            </div>
        </div>
    )
}

export default HomeProyectos