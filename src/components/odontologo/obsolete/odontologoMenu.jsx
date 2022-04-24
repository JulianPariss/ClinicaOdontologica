import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";

const OdontologoMenu = () => {
    return (
    <nav>
        <div className="nav-wrapper">
        <a href="#" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="CargarLista">Mostrar todos</Link></li>     
            <li><Link to="BuscarPorID">Buscar por ID</Link></li>
            <li><Link to="EliminarOdontologo">Eliminar por ID</Link></li>
            <li><Link to="CrearOdontologo">Crear</Link></li>
        </ul>
        </div>
    </nav>
    )
}
export default OdontologoMenu;