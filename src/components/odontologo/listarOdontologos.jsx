import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { consultarApi } from "../../util/util.js"

import BackMenu from "../backMenu";

import ButtonCustom from "../button";
import { Card, Collapse } from "antd";

import Odontologo from "./odontolgo.jsx";


const ODONTOLOGO_API = "http://localhost:8080/odontologo";
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

const Odontologos = () => {
    const [lista, setLista] = React.useState([]);
    const { Panel } = Collapse;

    useEffect(() => {
        cargarOdontologos()
    },[])

    const cargarOdontologos = () => {
        consultarApi(ODONTOLOGO_API,{
            method: "GET",
            headers: {
                "Authorization": `Bearer ${jwt}`
            }
        })
            .then((res) => {
                setLista(res);
            });
    }
    return (
        <div>
            <BackMenu subTitle={"Todos los odontolgos"}></BackMenu>
            <ButtonCustom onClick={(()=>(cargarOdontologos()))}></ButtonCustom>
            <Collapse defaultActiveKey={["0"]} style={style2}>         
            {lista.map((data,key) => (
                <Panel header={"Odontologo: " + data.nombre + " " + data.apellido} key={key} style={style}>
                    <Odontologo props={data} key={key}></Odontologo>
                </Panel>
            ))}
            </Collapse>   
        </div>
    )
};
export default Odontologos;