import React from 'react';
import LogoutButton from './login/logoutButton';
import { Link, useLocation } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <button tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </button>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to= "/CrudProyecto/CrearProyecto">Agregar proyecto</Link></li>
        <li><Link to= "/CrudPruebas/CrearPrueba">Agregar prueba</Link></li>
        <li><Link to= "/usuarios">Usuarios</Link></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <Link to="/home"className="btn btn-ghost text-xl">App</Link>
  </div>
  <div className="navbar-end ">
    <div>
      <LogoutButton/>
    </div>
    
  </div>
</div>
  );
};

export default NavBar;
