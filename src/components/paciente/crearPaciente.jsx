import React from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { UtilCrear } from "../../util/utilCrear";

import BackMenu from "../backMenu";
import TextInput from "../textInput";


import { Button, Tooltip } from 'antd';
import { UserAddOutlined  } from '@ant-design/icons';

const PACIENTE_API = "http://localhost:8080/paciente/crear"

const style = {
    display: "flex",
    flexDirection: "column",
}

const style2 = {
    
}

const CrearPaciente = () => {
    const methods = useForm();

    return(
        <div style={style}>
            <BackMenu subTitle={"Crear paciente"}></BackMenu>
            <FormProvider {...methods}>
                <form  className="col s12" onSubmit={methods.handleSubmit((DATA) => {UtilCrear(DATA,PACIENTE_API)})}>
                        <div className="row" style={style2}>
                            <TextInput atribute="nombre"></TextInput>
                            <TextInput atribute="apellido"></TextInput>
                            <TextInput atribute="email"></TextInput>
                            <TextInput atribute="dni"></TextInput>
                            <TextInput atribute="fechaIngreso"></TextInput>
                            <TextInput atribute="domicilio.calle"></TextInput>
                            <TextInput atribute="domicilio.numero"></TextInput>
                            <TextInput atribute="domicilio.localidad"></TextInput>
                            <TextInput atribute="domicilio.provincia"></TextInput>
                            <Tooltip title="search">
                                <Button shape="default" icon={<UserAddOutlined />} size="large" style={{width: "100vw"}} htmlType="submit"/>
                            </Tooltip>
                        </div> 
                </form>
            </FormProvider> 
        </div>
        
    )
}

export default CrearPaciente;