import { NavLink, Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <div>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
            <Outlet/>
        </div>
    )
}