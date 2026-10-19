import Input from "./Input"

function Form() {
    return (
        <>
            <form className="flex flex-col">
                <Input label="Email" id="email" type="email" />
                <Input label="Senha" id="password" type="password" />
                <button>login</button>
            </form>
        </>
    )
}

export default Form