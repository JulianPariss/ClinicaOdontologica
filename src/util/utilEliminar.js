import { SuccesAlert,FailAlert } from "./alerts/alerts";

export const UtilEliminar = (e,API,config) => {
    e.preventDefault();
    fetch(API,config)
    .then((res) => { if(res.status != 200) {
        FailAlert();
    } else {SuccesAlert()}})
    .catch(() => {
        FailAlert();
    });
}
