import React from 'react'
import literals from './literals'
import './index.sass'
import { Link } from 'react-router-dom'

function Register({ lang, onRegister, error }) {

    const { title, name, surname, email, password, password2, reset, back } = literals[lang]

    function handleSubmit(e) {
        e.preventDefault()

        const {
            name: { value: name },
            surname: { value: surname },
            username: { value: username },
            password: { value: password },
            password2: { value: password2 }
        } = e.target

        onRegister(name, surname, username, password, password2)
    }


    return <section className='main-register'>
        <div className='register-container'>
            <Link to={`/`}><button className="button-back button is-rounded is-danger is-outlined">{back}</button></Link>
            <h2 className='title'>{title}</h2>
            <form className="form-register" onSubmit={handleSubmit}>
                <input className="input-register input field is-rounded is-danger" type="text" name="name" placeholder={name} autoFocus />
                <input className="input-register input field is-rounded is-danger" type="text" name="surname" placeholder={surname} />
                <input className="input-register input field is-rounded is-danger" type="email" name="username" placeholder={email} />
                <input className="input-register input field is-rounded is-danger" type="password" name="password" placeholder={password} />
                <input className="input-register input field is-rounded is-danger" type="password" name="password2" placeholder={password2} />
                <div>
                <input className="button-register button is-rounded is-danger" type="submit" value={title} />
                <input className="button-register button is-rounded is-danger" type="reset" value={reset} />
                </div>
                <span className="help-register help is-danger">{error}</span>
            </form>
        </div>
    </section>
}

export default Register