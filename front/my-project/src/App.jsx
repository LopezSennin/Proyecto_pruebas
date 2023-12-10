import { useAuth0 } from "@auth0/auth0-react";
import './App.css'

import { useContext} from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//vistas 
import HomeLogin from './views/homeLogin'
import NavBar from './components/NavBar'
import Home from './views/home'
import HomeProyectos from "./views/homeproyectos";
import CrearPrueba from "./components/CrudPruebas/CrearPrueba"


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
