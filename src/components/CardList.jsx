import Card from "./Card"
import { useEffect, useState } from "react"

function CardList() {
    const [data, setData] = useState({})

    useEffect(() => {
        async function dataFetch() {
            const fetchData = await fetch("https://rickandmortyapi.com/api/character")
            const data = await fetchData.json()

            setData(data)
        }
        dataFetch()
    }, [])

    // const myData = data?.results?.slice(0, 10)

    const list = []

    for(let i = 0; i < data?.results?.length; i++){
        list.push(<Card {...data?.results[i]} key={i} />)
    }

    return (
        <>
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