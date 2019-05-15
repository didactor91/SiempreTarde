import React from 'react'
import literals from './literals'
import './index.sass'
import { Link } from 'react-router-dom'

function Login({ lang, onLogin, error }) {

    const { title, email, password, reset, back } = literals[lang]

    function handleSubmit(e) {
        e.preventDefault()

        const {
            username: { value: username },
            password: { value: password }
        } = e.target

        onLogin(username, password)
    }


    return <section className='main-login'>
        <div className='login-container'>
            <Link to={`/`}><button className="button-back button is-rounded is-danger is-outlined">{back}</button></Link>
            <h2 className='title'>{title}</h2>
            <form onSubmit={handleSubmit}>
                <div className='columns is-8 is-2-offset is-desktop'>
                    <div className='column is-half is-desktop'>
                        <input className="input field is-rounded is-danger" type="email" name="username" placeholder={email} autoFocus />
                    </div>
                    <div className='column is-half is-desktop'>
                        <input className="input field is-rounded is-danger" type="password" name="password" placeholder={password} />
                    </div>
                    </div>
                    <input className="button-login button is-rounded is-danger" type="submit" value={title} />
                    <input className="button-login button is-rounded is-danger" type="reset" value={reset} />
                    <span className="help is-danger">{error}</span>
            </form>
        </div>
    </section>

}

export default Login