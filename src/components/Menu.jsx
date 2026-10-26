import { NavLink } from "react-router"

function Menu() {
    return (
        <>
            <ul className="menu">
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/form/1">
                        Pagina 2
                    </NavLink>
                </li>
                <li>
                    <NavLink>
                        Pagina 3
                    </NavLink>
                </li>
            </ul>
        </>
    )
}

export default Menu