import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom"
import logo from '../assets/react.svg'
import RegisterPage from "../03-forms/pages/RegisterPage"
import FormikPage from '../03-forms/pages/FormikPage';
import FormikYupPage from "../03-forms/pages/FormikYupPage";

const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout" style={{ overflow: 'hidden' }}>
                <nav>
                    <img src={logo} alt="React logo" />
                    <ul>
                        <li>
                            <NavLink to='/register' className={({isActive})=> isActive ? 'nav-active' : ''}>Register page</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-basic' className={({isActive})=> isActive ? 'nav-active' : ''}>Formik basic</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-yup' className={({isActive})=> isActive ? 'nav-active' : ''}>Formik yup</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/register" element={<RegisterPage/>} />
                    <Route path="/formik-basic" element={<FormikPage/>} />
                    <Route path="/formik-yup" element={<FormikYupPage/>} />
                    <Route path="/" element={<h1>Home</h1>} />
                    <Route path="/*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Navigation
