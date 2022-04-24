import React from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { UtilCrear } from "../../util/utilCrear";

import BackMenu from "../backMenu";
import TextInput from "../textInput";


import { Button, Tooltip } from 'antd';
import { UserAddOutlined  } from '@ant-design/icons';

const ODONTOLOGO_API = "http://localhost:8080/odontologo/crear";


const CrearOdontologo = () => {
    const methods = useForm();

    return(
        <div>
            <BackMenu subTitle={"Crear odontolgo"}></BackMenu>
            <FormProvider {...methods}>
                <form className="col s12" onSubmit={methods.handleSubmit((DATA) => {UtilCrear(DATA,ODONTOLOGO_API)})}>
                    <div className="row">
                        <TextInput atribute="nombre"></TextInput>
                        <TextInput atribute="apellido"></TextInput>
                        <TextInput atribute="matricula"></TextInput>
                        <Tooltip title="search">
                            <Button shape="default" icon={<UserAddOutlined />} size="large" style={{width: "100vw"}} htmlType="submit"/>
                        </Tooltip>
                    </div>    
                </form>
            </FormProvider> 
        </div>
        
    )
}

export default CrearOdontologo;