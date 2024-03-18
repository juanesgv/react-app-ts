import { MySelect, MyTextInput } from '../../components'
import formJson from './data/custom-form.json'
import { Formik, Form } from 'formik'
import * as Yup from 'yup';

const initialValues: {[key: string] : any} = {}
const requieredFields: {[key: string] : any} = {}

for (const input of formJson) {
    initialValues[input.name] = input.value

    if( !input.validations) continue

    let schema = Yup.string()

    for (const rule of input.validations) {
        if(rule.type === 'required'){
            schema = schema.required('Este campo es requerido')
        }

        if(rule.type === 'minLength') {
            schema = schema.min( (rule as any).value || 1, `Mínimo  de ${(rule as any).value || 1} de caracteres`)
        }
        
        if(rule.type === 'email') {
            schema = schema.email('El correo electrónico no es válido')
        }

    }

    requieredFields[input.name] = schema
}

const validationSchema = Yup.object({...requieredFields})

const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic form</h1>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >

                {(formik) => (
                    <Form noValidate>
                        
                        {formJson.map( field => {

                            if( field.type === 'input' || field.type === 'password' || field.type === 'email') {

                                return <MyTextInput 
                                            key={field.name}
                                            type={field.type as any} 
                                            label={field.label} 
                                            name={field.name} 
                                            placeholder={field.placeholder}
                                        />
                            }else if (field.type === 'select'){
                                return (
                                    <MySelect key={field.name} label={field.label} name={field.name}>

                                        <option value={""}>Select an option</option>

                                        {
                                            field.options?.map( opt => (
                                                <option  key={opt.id} value={opt.id}>{opt.label}</option>
                                            ))
                                        }

                                    </MySelect>
                                )
                            }

                        })}

                        <button type='submit'>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default DynamicForm
