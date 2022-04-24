import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

const TextInput = (props) => {
    const { register } = useFormContext();
    return (
        <div className="input-field col s6">
            <input {...register(props.atribute)} ></input>
            <label className="active">{props.atribute}</label>
        </div>    
    )
}

export default TextInput;