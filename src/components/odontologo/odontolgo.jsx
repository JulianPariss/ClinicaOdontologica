import React from "react";
import { Card } from 'antd';

const style = {
    width: "100vw",
}

const Odontologo = (data) => {
    const {props} = data;
    return(
            <Card title={props.nombre+" "+props.apellido} style={style}>
                <p>Matricula: {props.matricula}</p>
            </Card>
    )
    
}



export default Odontologo;