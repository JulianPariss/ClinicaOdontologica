import React from "react";
import { Link } from "react-router-dom";


const PacienteMenu = () => {

    return(
        <nav>
        <div className="nav-wrapper">
        <a href="#" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="CargarLista">Mostrar todos</Link></li>  
            <li><Link to="BuscarPorID">Buscar por ID</Link></li>
            <li><Link to="EliminarPaciente">Eliminar por ID</Link></li>
            <li><Link to="CrearPaciente">Crear</Link></li> 
        </ul>
        </div>
    </nav>
    )
}

export default PacienteMenu;