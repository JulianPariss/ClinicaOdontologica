import { FailAlert } from "./alerts/alerts";

export const consultarApi = (URL_API,options) =>
    fetch(URL_API,options)
        .then((response) => {
            return response.json()
        })
        .catch(() => {
            FailAlert()
        });


