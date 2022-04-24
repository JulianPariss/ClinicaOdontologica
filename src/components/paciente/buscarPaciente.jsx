import React, { useEffect } from "react";
import { consultarApi } from "../../util/util";

import Paciente from "./paciente.jsx";
import BackMenu from "../backMenu";


import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const PACIENTE_API = "http://localhost:8080/paciente/";
const jwt = sessionStorage.getItem("jwt")

const BuscarPaciente = () => {

    const [paciente,setPaciente] = React.useState();
    const [id,setId] = React.useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        consultarApi(PACIENTE_API+id,{method : "GET",headers:{"Authorization": `Bearer ${jwt}`}})
        .then((res) => {
            setPaciente(res);
        });
    }


    return(
        <div>
        <BackMenu subTitle={"Buscar paciente"}></BackMenu>
        <form onSubmit={handleSubmit}>
            <input  onChange={(e) => (setId(e.target.value))}  value={id}></input>
            <Tooltip title="search">
                <Button shape="default" icon={<SearchOutlined/>} size="large" style={{width: "100vw"}} htmlType="submit"/>
            </Tooltip>
        </form>
            {paciente != null && paciente.domicilio != null &&  <Paciente props={paciente}></Paciente>}
        </div>
    )
}

export default BuscarPaciente;