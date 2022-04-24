import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

import { UtilCrear } from "../../util/utilCrear";
import TextInput from "../textInput";

const DOMICILIO_API = "http://localhost:8080/domicilio/crear";

const CrearDomicilio = () => {
    const methods = useForm();

    return (
        <FormProvider {...methods}>
            <form className="col s12" onSubmit={methods.handleSubmit((DATA) => {UtilCrear(DATA,DOMICILIO_API)})}>
                <div className="row">
                    <TextInput atribute="calle"></TextInput>
                    <TextInput atribute="numero"></TextInput>
                    <TextInput atribute="localidad"></TextInput>
                    <TextInput atribute="provincia"></TextInput>
                    <input type="submit"></input>
                </div>    
            </form>
        </FormProvider>
    )

}

export default CrearDomicilio;