function Input({label, id, type="text"}){
    return (
        <>
            <label htmlFor={id}>
                {label}
                <input type={type} id={id} name={id} />
            </label>
        </>
    )
}

export default Input