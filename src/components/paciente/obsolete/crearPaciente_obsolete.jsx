import React from "react";

import { consultarApi } from "../../../util/util";

import PacienteNavBar from "../../navBar.jsx"


const PACIENTE_API = "http://localhost:8080/paciente/crear"
const CrearPaciente = () => {

    const [nombre,setNombre] = React.useState("");
    const [apellido,setApellido] = React.useState("");
    const [email,setEmail] = React.useState("");
    const [dni,setDni] = React.useState("");
    const [fechaIngreso,setFechaIngreso] = React.useState("");

    const [calle,setCalle] = React.useState("");
    const [numero,setNumero] = React.useState("");
    const [localidad,setLocalidad] = React.useState("");
    const [provincia,setProvincia] = React.useState("");

    const cargarPaciente = () => {
        
        const config = {
            headers : {"Content-Type":"application/json"},
            method: "POST",
            body: JSON.stringify({
                nombre: nombre,
                apellido: apellido,
                email: email,
                dni: dni,
                fechaIngreso: fechaIngreso,
                domicilio: {
                    calle: calle,
                    numero: numero,
                    localidad: localidad,
                    provincia: provincia
                }
            })
        }
        return config; 
        
    }
    const guardarPaciente = (e) => {
        e.preventDefault();
        consultarApi(PACIENTE_API,cargarPaciente())
        .then((res)=> {
            console.log(res);
        })
    }

    return(
        <div className="container">
        <PacienteNavBar URL="/paciente"></PacienteNavBar>        
        <div className="row">
            <form className="col s12" onSubmit={(e) => (guardarPaciente(e))}>
            <div className="row">
                <div className="input-field col s6">
                    <input id="value" type="text" className="validate" onChange={(e) => (setNombre(e.target.value))}/>
                    <label htmlFor="nombre">Nombre</label>
                </div>
                <div className="input-field col s6">
                    <input id="value" type="text" className="validate" onChange={(e) => (setApellido(e.target.value))}/>
                    <label htmlFor="apellido">Apellido</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6">
                    <input id="value" type="text" className="validate" onChange={(e) => (setEmail(e.target.value))}/>
                    <label htmlFor="email">E-mail</label>
                </div>
                <div className="input-field col s6">
                    <input id="value" type="text" className="validate" onChange={(e) => (setDni(e.target.value))}/>
                    <label htmlFor="dni">DNI</label>
                </div>
                <div className="input-field col s6">
                    <input id="value" type="text" className="validate" onChange={(e) => (setFechaIngreso(e.target.value))}/>
                    <label htmlFor="fecha">Fecha Ingreso</label>
                </div>
            </div>
            <div className="row">
            <div className="row">
                <div className="input-field col s6">
                    <input id="value" type="text" className="validate" onChange={(e) => (setCalle(e.target.value))}/>
                    <label htmlFor="calle">Calle</label>
                </div>
                <div className="input-field col s6">
                    <input id="value" type="text" className="validate" onChange={(e) => (setNumero(e.target.value))}/>
                    <label htmlFor="numero">Numero</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6">
                    <input id="value" type="text" className="validate" onChange={(e) => (setLocalidad(e.target.value))}/>
                    <label htmlFor="localidad">Localidad</label>
                </div>
                <div className="input-field col s6">
                    <input id="value" type="text" className="validate" onChange={(e) => (setProvincia(e.target.value))}/>
                    <label htmlFor="provincia">Provincia</label>
                </div>
            </div>
            <div className="row"></div>
                <div className="input-field col s6">
                    <button className="btn waves-effect waves-light" name="action"  type="submit">Crear</button>
                </div>
            </div>
            </form>
        </div>
    </div>
    )
}

export default CrearPaciente;
