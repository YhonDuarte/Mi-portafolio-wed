import {useState} from "react"
import {Correo} from "./Componentes/Correo"
import {Header} from "./Componentes/Header"
import {Informacion} from "./Componentes/Informaion"
import {Sociales} from "./Componentes/Sociales"
import {Loade} from "./styled"

import logo from './assets/logoF.svg'


function App() {
    const [load, setLoad] = useState(true)
    window.onload = () => {
        setTimeout(() => {
            setLoad(false)
        }, 1000);

    }
    return (
        <> {
            load ? <Loade><img src={logo}/></Loade> : <>
                <Header/>
                <Sociales/>
                <Informacion/>
                <Correo/>
            </>
        } </>
    )
}
export default App
