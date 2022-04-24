import React from "react";
import { Card } from 'antd';
import Paciente from "../paciente/paciente";
const style = {
    width: "100vw",
}



const Turno = (data) => {
    const {props} = data;
    return (
        <Card title={props.fechaTurno} style={style} key={props.key}>
            <Paciente props={props.paciente}></Paciente>
        </Card>
    )
    
}


export default Turno;