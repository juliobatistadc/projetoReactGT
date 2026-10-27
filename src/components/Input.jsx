function Input({label, id, type="text", value, onSetCep}){
    return (
        <>
            <label htmlFor={id}>
                {label}
                <input value={value} onChange={(e)=>onSetCep(e.target.value)} type={type} id={id} name={id} />
            </label>
        </>
    )
}

export default Input