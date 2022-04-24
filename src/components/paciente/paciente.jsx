import React from "react";
import { Card } from 'antd';

const style = {
    width: "100vw",
}

const Paciente = (data) => {
    const {props} = data;
    const {domicilio} = props;
    return(
            <Card title={props.nombre+" "+props.apellido} style={style}>
                <p>Fecha de ingreso: {props.fechaIngreso}</p>
                <p>DNI: {props.dni}</p>
                <p>Email: {props.email}</p>
                <p>Domicilio:</p>
                <p>Calle: {domicilio.calle}</p>
                <p>Numero: {domicilio.numero}</p>
                <p>Localidad: {domicilio.localidad}</p>
                <p>Provincia: {domicilio.provincia}</p>
            </Card>
    )
    
}



export default Paciente;