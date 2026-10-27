import { useEffect, useState } from "react"
import Input from "../components/Input.jsx"

function Consulta(){
    const [cep, setCep] = useState("")
    const [address, setAdress] = useState({})
    
    useEffect(() => {
        if(cep.length != 8) {
            setAdress({})
            return
        }

        async function fetchData(){
            const dataFetch = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            const data = await dataFetch.json()

            setAdress(data)
        }
        fetchData()
    }, [cep])

    const listAdrress = []

    for(const key in address){
        if(key === "cep") continue
        if(!address[key]) continue
        listAdrress.push(<Input key={key} label={key} id={key} value={address[key]} /> )
    }

    return(
        <>
            <form>
                <Input label="Cep" id="cep" onSetCep={setCep} value={cep} />
                {listAdrress}
            </form>
        </>
    )
}

export default Consulta