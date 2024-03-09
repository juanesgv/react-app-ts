import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom"
import logo from '../assets/react.svg'

import { routes } from "./routes"

const Navigation = () => {
    
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React logo" />
                    <ul>

                        {routes.map(route => (
                            <li key={route.to}>
                                <NavLink to={route.to} className={({isActive})=> isActive ? 'nav-active' : ''} >{route.name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <Routes>
                    {routes.map(route => (
                        <Route key={route.path} path={route.path} element={<route.Component/>} />
                    ))}
                    <Route path="/*" element={<Navigate to={routes[0].to} replace />} /> 
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Navigation
