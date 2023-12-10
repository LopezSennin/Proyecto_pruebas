import { useAuth0 } from "@auth0/auth0-react";
import './App.css'

import { useContext} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//vistas 
import HomeLogin from './views/homeLogin'
import NavBar from './components/NavBar'
import Home from './views/home'
import HomeProyectos from "./views/homeproyectos";
import CrearPrueba from "./components/pruebas/CrearPrueba"
import Detalles from "./components/pruebas/Detalles";
import Editar from "./components/pruebas/Editar";
import Crearproyecto from "./components/proyecto/crearproyecto";
import CrudUsuario from "./components/usuarios/CrudUsuario";


function App() {

  const {isAuthenticated} = useAuth0();

  
  return (
    <>
      
        {isAuthenticated ? (
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home/>} />
              <Route path="/homeproyectos" element={<HomeProyectos/>} />
              <Route path="/CrudPruebas/CrearPrueba" element={<CrearPrueba/>} />  
              <Route path="/CrudPruebas/Detalles" element={<Detalles/>} /> 
              <Route path="/CrudPruebas/Editar" element={<Editar/>} /> 
              <Route path="/proyecto/crearproyecto" element={<Crearproyecto/>} />
              <Route path="*" element={<Navigate to="/home" />} /> 
              <Route path="/crudUsuario" element={<CrudUsuario/>} />
            </Routes>
          </BrowserRouter>
        ):
        (
          <HomeLogin />         
        )}
      
    </>
    
    
  )
}

export default App
