import { consultarApi } from "./util"
import { SuccesAlert, FailAlert } from "./alerts/alerts";

export const UtilCrear = (data,API) => {
    let jwt = sessionStorage.getItem('jwt');
    consultarApi(API, 
        {
            headers: {
                "Content-Type":"application/json",
                "Authorization": `Bearer ${jwt}`
            },
            method: "POST",
            body: JSON.stringify(data),
            
        }).then(() => (SuccesAlert()))
        .catch(() => (FailAlert()))
        

}