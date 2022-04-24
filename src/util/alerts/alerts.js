
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const  SuccesAlert = () => {
    const MySwal = withReactContent(Swal)

    MySwal.fire({
        icon:"success",
        title: <p>Operacion realizada con exito</p>,
        footer: "Julian APP"
    })
}

export const  FailAlert = () => {
    const MySwal = withReactContent(Swal)

    MySwal.fire({
        icon:"error",
        title: <p>La operacion fracaso</p>,
        footer: "Julian APP"
    })
}