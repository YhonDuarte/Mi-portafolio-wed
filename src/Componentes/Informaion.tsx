import {Contactame} from "./Contactame"
import {Habilidades} from "./Habilidades"
import {Presentacion} from "./Presentacion"
import {Saludo} from "./Saludo"
import {Trabajos} from "./Trabajos"

export const Informacion = () => {
    return (
        <>
            <Saludo/>
            <Presentacion/>
            <Habilidades/>
            <Trabajos/>
            <Contactame/>


        </>
    )
}
