import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom"
import logo from '../assets/react.svg'
import {FormikAbstractation, FormikComponents, FormikPage, FormikYupPage, RegisterPage, RegisterFormikPage, DynamicForm} from "../03-forms/pages"

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
                        <li>
                            <NavLink to='/formik-components' className={({isActive})=> isActive ? 'nav-active' : ''}>Formik components</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-abstractation' className={({isActive})=> isActive ? 'nav-active' : ''}>Formik abstractation</NavLink>
                        </li>
                        <li>
                            <NavLink to='/formik-register' className={({isActive})=> isActive ? 'nav-active' : ''}>Formik register</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dynamic-form' className={({isActive})=> isActive ? 'nav-active' : ''}>Dynamic form</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/register" element={<RegisterPage/>} />
                    <Route path="/formik-basic" element={<FormikPage/>} />
                    <Route path="/formik-yup" element={<FormikYupPage/>} />
                    <Route path="/formik-components" element={<FormikComponents/>} />
                    <Route path="/formik-abstractation" element={<FormikAbstractation/>} />
                    <Route path="/formik-register" element={<RegisterFormikPage/>} />
                    <Route path="/dynamic-form" element={<DynamicForm/>} />
                    <Route path="/" element={<h1>Home</h1>} />
                    <Route path="/*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Navigation
