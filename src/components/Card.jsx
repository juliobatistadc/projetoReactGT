function Card({name, species, status, image}) {
    return (
        <>
            <li className="flex items-center gap-2 border border-b-blue-400 w-fit p-2">
                <img src={image} alt="" width="200px" className="rounded-[50%]" />
                <div className="flex flex-col">
                    <span>{name}</span>
                    <span>{status}</span>
                    <span>{species}</span>
                </div>
            </li>
        </>
    )
}

export default Card