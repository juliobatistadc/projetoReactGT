import Card from "./Card"
import { useEffect, useState } from "react"

function CardList() {
    const [data, setData] = useState({})
    const [url, setUrl] = useState("https://rickandmortyapi.com/api/character")

    useEffect(() => {
        async function dataFetch() {
            const fetchData = await fetch(url)
            const data = await fetchData.json()

            setData(data)
        }
        dataFetch()
    }, [url])

    console.log(url)

    // const myData = data?.results?.slice(0, 10)

    const list = []

    for(let i = 0; i < data?.results?.length; i++){
        list.push(<Card {...data?.results[i]} key={i} />)
    }

    return (
        <>
            <button onClick={() => setUrl(data.info.prev)} className="m-2">prev</button>
            <button onClick={() => setUrl(data.info.next)} className="m-2">next</button>
            <ul>
                {/* {
                    data?.results?.map((item, index) => <Card {...item} key={index} />)
                } */}
                {
                    list
                }
            </ul>
        </>
    )
}

export default CardList