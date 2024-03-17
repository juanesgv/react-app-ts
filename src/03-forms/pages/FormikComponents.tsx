import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'


const FormikComponents = () => {

    return (
        <div>
            <h1>Formik components</h1>

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
                            <label htmlFor='firstName'>First name</label>
                            <Field name="firstName" type="text" />
                            <ErrorMessage name='firstName' component='span'/>

                            <label htmlFor='lastName'>Last name</label>
                            <Field name="lastName" type="text" />
                            <ErrorMessage name='lastName' component='span'/>


                            <label htmlFor='email'>Email</label>
                            <Field name="email" type="mail" />
                            <ErrorMessage name='email' component='span'/>

                            <label>
                                <Field name="terms" type="checkbox" />
                                Terms and conditions
                            </label>
                            <ErrorMessage name='terms' component='span'/>
                            
                            <label htmlFor='jobType'>Job type</label>
                            <Field name="jobType" as='select'>
                                <option value='developer'>Developer</option>
                                <option value='designer'>Desginer</option>
                                <option value='it-senior'>IT Senior</option>
                                <option value='it-jr'>IT Junior</option>
                            </Field>

                            <button type='submit'>Submit</button>
                        </Form>
                    )
                }

            </Formik>

        </div>
    )
}

export default FormikComponents
