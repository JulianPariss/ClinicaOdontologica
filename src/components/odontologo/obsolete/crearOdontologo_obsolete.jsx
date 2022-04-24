import React from "react";
import { Link } from "react-router-dom";
import { consultarApi } from "../../../util/util.js";

import OdontologoNavBar from "../../navBar.jsx";

const ODONTOLOGO_API = "http://localhost:8080/odontologo/crear";

const CrearOdontologo = () => {
    const [nombre, setNombre] = React.useState("");
    const [apellido, setApellido] = React.useState("");
    const [matricula,setMatricula] = React.useState("");

    const cargarRequisitos = () => {
        const requisitosConsulta = {
        method:"POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            nombre: nombre,
            apellido: apellido,
            matricula: matricula
        })
        };
        return requisitosConsulta;
    }
    

    const cargarOdontologo = (API,e) => {
        e.preventDefault();
        consultarApi(API, cargarRequisitos())
    }


    return(
    <div className="container">
        <OdontologoNavBar URL="/odontologo"></OdontologoNavBar>        
        <div className="row">
            <form className="col s12" onSubmit={(e) => (cargarOdontologo(ODONTOLOGO_API,e))}>
            <div className="row">
                <div className="input-field col s6">
                    <input id="nombre" type="text" className="validate" onChange={(e) => (setNombre(e.target.value))}/>
                    <label htmlFor="nombre">Nombre</label>
                </div>
                <div className="input-field col s6">
                    <input id="apellido" type="text" className="validate" onChange={(e) => (setApellido(e.target.value))}/>
                    <label htmlFor="apellido">Apellido</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6">
                    <input id="matricula" type="text" className="validate" onChange={(e) => (setMatricula(e.target.value))}/>
                    <label htmlFor="matricula">Matricula</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6">
                    <button className="btn waves-effect waves-light" name="action"  type = "submit">Crear</button>
                </div>
            </div>
            </form>
        </div>
    </div>
    )
}
