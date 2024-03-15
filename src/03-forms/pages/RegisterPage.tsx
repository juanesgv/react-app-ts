import { FormEvent,  } from 'react'
import { useForm } from '../hooks/useForm'
import '../styles/styles.css'

const RegisterPage = () => {

    const{formData, onChange,
        name, email, password1, password2, resetForm, isValidEmail} = useForm({ //sale del operador ... definido en el return del hook
        name: '',
        email: '',
        password1: '',
        password2: '',
    })
    // const {name, email, password1, password2} = formData

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log(formData)
    }

    


    return (
        <div>
            <h1>Register Page</h1>

            <form noValidate onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="name"
                    name="name"
                    value={name}
                    onChange={ e => onChange(e) }
                    className= {`${name.trim().length <= 0 && 'has-error'} `}
                />
                { name.trim().length <= 0 && <span>Este campo es obligatorio</span> }

                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={ e => onChange(e) }
                    className= {`${!isValidEmail(email) && 'has-error'} `}
                />
                { !isValidEmail(email) && <span>Email no es válido</span> }

                <input
                    type="password"
                    placeholder="Password"
                    name="password1"
                    value={password1}
                    onChange={ e => onChange(e) }
                    className= {`${password1.trim().length <= 0 && 'has-error'} `}
                />
                { password1.trim().length <= 0 && <span>Este campo es obligatorio</span> }
                { password1.trim().length < 6 && password1.trim().length > 0 && <span>la contraseña debe ser mayor a 6 caracteres</span> }


                <input
                    type="password"
                    placeholder="Repeat password"
                    name="password2"
                    value={password2}
                    onChange={ e => onChange(e) }
                    className= {`${password2.trim().length <= 0 && 'has-error'} `}
                />
                { password2.trim().length <= 0 && <span>Este campo es obligatorio</span> }
                { password2.trim().length > 0 && password2.trim() !== password1 && <span>las contraseñas deben coincidir</span> }


                <button type="submit">Create</button>

            </form>
        </div>
    )
}

export default RegisterPage
