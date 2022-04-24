import React from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { UtilCrear } from "../../util/utilCrear";

import BackMenu from "../backMenu";
import TextInput from "../textInput";
import { DatePicker, Radio, Space } from 'antd';

import { Button, Tooltip } from 'antd';
import {FileAddOutlined } from '@ant-design/icons';

const ODONTOLOGO_API = "http://localhost:8080/turno/asignarTurno";



const AsignarTurno = () => {
    const methods = useForm();

    const asignar = (DATA) => {
        let data = {
            fechaTurno : DATA.Fecha
        }
        if (DATA != null) {
            UtilCrear(data,ODONTOLOGO_API+"/"+DATA.Paciente+"/"+DATA.Odontologo)
        }
    }

    return(
        <div>
            <BackMenu subTitle={"Crear odontolgo"}></BackMenu>
            <FormProvider {...methods}>
                <form className="col s12" onSubmit={methods.handleSubmit((DATA) => {asignar(DATA)})}>
                    <div className="row">
                        <TextInput atribute="Odontologo"></TextInput>
                        <TextInput atribute="Paciente"></TextInput>
                        <TextInput atribute="Fecha"></TextInput>
                        <Tooltip title="Crear">
                            <Button shape="default" icon={<FileAddOutlined />} size="large" style={{width: "100vw"}} htmlType="submit"/>
                        </Tooltip>
                    </div>    
                </form>
            </FormProvider> 
        </div>
        
    )
}

export default AsignarTurno;