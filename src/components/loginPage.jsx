import React from "react";
import { useForm, FormProvider, useFormContext  } from "react-hook-form";
import { consultarApi } from "../util/util";
import { Button, Tooltip } from 'antd';
import { LoginOutlined  } from '@ant-design/icons';
import TextInput from "./textInput";

const URL_AUTHENTICATE = "http://localhost:8080/authenticate";


const style = {
    display: "flex",
    flexDirection: "column",
    Color: "red",
    alignItems: "center"
}


const style2 = {
    width: "20vw",
    display: "flex",
    flexDirection: "column"
}

const LoginPage = () => {
    const methods = useForm();

    const authenticate = (DATA) => {
        consultarApi(URL_AUTHENTICATE,
            {
                headers: {"Content-Type":"application/json"},
                method: "POST",
                body: JSON.stringify(DATA)
            })
            .then((res)=> {
                if (res.status != 500) {
                    console.log(res);
                    sessionStorage.setItem('jwt',res.jwt);
                    window.location.href = window.location+"home";
                }
            })
    }

    return(
            <div className="container" style={style}>
                <FormProvider {...methods}>
                    <form className="col s12" onSubmit={methods.handleSubmit((DATA) => {authenticate(DATA)})}>
                        <div style={style2}>
                            <TextInput atribute="username"></TextInput>
                            <TextInput atribute="password"></TextInput>
                            <Tooltip title="search">
                                <Button shape="default" icon={<LoginOutlined />} size="large" style={{width: "20vw"}} htmlType="submit"/>
                            </Tooltip>
                        </div>
                    </form>
                </FormProvider>
            </div>
    )
}

export default LoginPage;

