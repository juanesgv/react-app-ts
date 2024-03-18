
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import '../styles/styles.css'
import { MyTextInput } from '../../components';

const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>   

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2 :''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                                .min(2, 'El nombre debe tener al menos 3 caracteres')
                                .max(15, 'El nombre debe ser menor de 15 caracteres')
                                .required('Requerido'),
                        email : Yup.string()
                                .email('Formato inválido')
                                .required('Requerido'),
                        password1 : Yup.string()
                                    .min(6, 'Debe tener al menos 6 caracteres')
                                    .required('Requerido'),
                        password2 : Yup.string()
                                    .oneOf([Yup.ref('password1'), 'Las contraseñas no coinciden'])
                                    .required('Requerido')
                    })
                }
            >
                { (formik) => (
                    <Form>
                        
                        <MyTextInput 
                            label={'Nombre'} 
                            name={'name'}
                            placeholder='Juan'
                        />

                        <MyTextInput 
                            label={'Email'} 
                            name={'email'}
                            placeholder='juan@mail.com'
                        />

                        <MyTextInput 
                            label={'Password'} 
                            name={'password1'}
                            type='password'
                            placeholder='******'
                        />

                        <MyTextInput 
                            label={'Confirmar contraseña'} 
                            name={'password2'}
                            type='password'
                            placeholder='******'
                        />

                        <button type="submit">Create</button>
                        <button type="button" onClick={formik.handleReset}>Reset</button>
                    </Form>
                )} 

            </Formik>
        </div>
    )
}

export default RegisterFormikPage
