import { useState } from "react"
import Input from "../components/Input.jsx"

function Consulta(){
    "https://viacep.com.br/ws/01001000/json/"
    const [cep, setCep] = useState("")
    
    

    return(
        <>
            <form>
                <Input label="Cep" id="cep" onSetCep={setCep} value={cep} />
                <button>Buscar</button>
            </form>
        </>
    )
}

export default Consulta