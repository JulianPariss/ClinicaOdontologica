import React, { useEffect, useState } from "react";
import { consultarApi } from "../../util/util";

import BackMenu from "../backMenu";
import Paciente from "./paciente";

import ButtonCustom from "../button";
import { Card, Collapse } from "antd";


const PACIENTE_API = "http://localhost:8080/paciente";
const jwt = sessionStorage.getItem("jwt")

const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
}

const style2 = {
    width: "100vw"
}

const ListarPacientes = () => {
    const [lista,setLista] = React.useState([]);
    const { Panel } = Collapse;
    useEffect(() => {
        cargarPacientes();
    },[])

    const cargarPacientes = () => {
        consultarApi(PACIENTE_API,{method: "GET",headers:{"Authorization": `Bearer ${jwt}`}})
        .then((res) => {
            setLista(res);
        })  
    }

    return(
        <div>
            <BackMenu subTitle={"Todos los pacientes"}></BackMenu>
            <div className="cards" style={style}>
                <ButtonCustom onClick={(()=>(cargarPacientes()))}></ButtonCustom>
                <Collapse defaultActiveKey={["0"]} style={style2}>
                {lista.map((data,key)=> (
                    <Panel header={"Paciente: " + data.nombre + " " + data.apellido} key={key} style={style}>
                        <Paciente props={data} key={key}></Paciente>
                    </Panel>
                ))}
                </Collapse>
            </div>
                
        </div>
    )
} 


export default ListarPacientes;

{/* <Paciente props={data} key={key}></Paciente> */}