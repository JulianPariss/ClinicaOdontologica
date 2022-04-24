import React from "react";
import { consultarApi } from "../../util/util.js";

import BackMenu from "../backMenu";
import Turno from "./turno.jsx";

import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import ButtonCustom from "../button";
import { Card, Collapse } from "antd";
import Odontologo from "./odontolgo.jsx";

const ODONTOLOGO_API = "http://localhost:8080/odontologo/"
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

const BuscarOdontologo = () => {
    const [id, setId] = React.useState();
    const [od, setOd] = React.useState(1);
    const [toggle, setToggle] = React.useState(true);
    const { Panel } = Collapse;

    const [lista,setLista] = React.useState([]);


    const cargarOdontologo = (e) => {
        e.preventDefault();
        consultarApi(ODONTOLOGO_API+id, {method : "GET",headers:{"Authorization": `Bearer ${jwt}`}})
            .then((res)=> {
                if (res === undefined) {
                    setOd(0);
                    setLista(0)
                } else {
                    setOd(res)
                    setLista(res.turnos)
                }
            })
            

    } 
    
    return(
        <div> 
            <BackMenu subTitle={"Buscar odontolgo"}></BackMenu>
            <form onSubmit={cargarOdontologo}>
                <input  onChange={(e) => (setId(e.target.value))}  value={id}></input>
                <Tooltip title="search">
                    <Button shape="default" icon={<SearchOutlined/>} size="large" style={{width: "100vw"}} htmlType="submit"/>
                </Tooltip>
            </form>
            <div className="row">
                {od.nombre != null &&
                <Collapse defaultActiveKey={["0"]} style={style2}>
                    <Panel header={"Odontologo: " + od.nombre + " " + od.apellido} style={style}>
                        <Odontologo props={od}></Odontologo>
                            <Collapse defaultActiveKey={[""]} style={style2}>
                                {lista != null && lista.length > 0 && lista.map((data,key) => {
                                    console.log(data);
                                    return(
                                    <Panel header={"Turno: "+data.id} key={key} style={style}>
                                        <Turno props={data}></Turno>
                                    </Panel>
                                    )
                                })}
                            </Collapse>
                    </Panel>
                </Collapse>}
            </div>
        </div>
    )
}

export default BuscarOdontologo;