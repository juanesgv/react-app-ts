import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

import { MyTextInput, MyCheckbox, MySelect } from '../../components'


const FormikAbstractation = () => {

    return (
        <div>
            <h1>Formik Abastractation</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                            .max(15, 'Debe de tener 15 caracteres o menos')
                            .required('Requerido'),
                        lastName: Yup.string()
                            .max(15, 'Debe de tener 15 caracteres o menos')
                            .required('Requerido'),
                        email: Yup.string()
                            .email('El correo electrónico no es válido')
                            .required('Requerido'),
                        terms: Yup.boolean()
                                .oneOf([true], 'Debe aceptar las condiciones'),
                        jobType: Yup.string()
                                    .notOneOf(['it-jr'], "No disponible")
                                    .required('Requerido')
                    })
                }
            >

                {
                    formik => (
                        <Form>

                            <MyTextInput 
                                label="First Name" 
                                name="firstName"
                                placeholder='Juan'
                            />

                            <MyTextInput 
                                label="Last Name" 
                                name="lastName"
                                placeholder='Garcia'
                            />

                            <MyTextInput 
                                label="Email" 
                                name="email"
                                placeholder='juan@mail.com'
                                type='email'
                            />

                            <MySelect label="Job type" name="jobType">
                                <option value='developer'>Developer</option>
                                <option value='designer'>Desginer</option>
                                <option value='it-senior'>IT Senior</option>
                                <option value='it-jr'>IT Junior</option>
                            </MySelect>

                            <MyCheckbox label="Termns and conditions" name="terms"/>

                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }

            </Formik>

        </div>
    )
}

export default FormikAbstractation
