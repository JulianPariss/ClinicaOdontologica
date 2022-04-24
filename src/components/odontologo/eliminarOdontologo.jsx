import React from "react";

import BackMenu from "../backMenu";
import { UtilEliminar } from "../../util/utilEliminar.js";
import { Button, Tooltip } from 'antd';
import { UserDeleteOutlined } from '@ant-design/icons';

const ODONTOLOGO_API = "http://localhost:8080/odontologo/borrar/";
const jwt = sessionStorage.getItem("jwt")

const EliminarOdontologo = () => {
    const [id,setId] = React.useState();

    return(
        <div className>
            <BackMenu subTitle={"Eliminar odontolgo"}></BackMenu>
            <form onSubmit={(e) => (UtilEliminar(e,ODONTOLOGO_API+id,{method:"DELETE",headers:{"Authorization": `Bearer ${jwt}`}}))}>
                <input  onChange={(e) => (setId(e.target.value))}  value={id}></input>
                <Tooltip title="search">
                    <Button shape="default" icon={<UserDeleteOutlined />} size="large" style={{width: "100vw"}} htmlType="submit"/>
                </Tooltip>
            </form>            
        </div>
    )
}

export default EliminarOdontologo;