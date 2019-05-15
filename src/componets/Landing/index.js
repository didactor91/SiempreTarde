import React from 'react'
import literals from './literals'
import './index.sass'
import emoji from 'react-easy-emoji'

function Landing({ lang, onRegister, onLogin }) {
    const { welcome, register, login } = literals[lang]

    return <main className='main-landing'>

        <section className='heroTitle'>
            <h1>{welcome}<p>{ emoji(' 🚌💨 ... 🏃🏻‍♀️🏃🏻‍♂️') }</p></h1>

        </section>

        <section className='buttons-landing buttons has-text-centered'>
            <button className='button-landing button is-danger is-rounded is-6' onClick={() => onRegister()}>{register}</button>
            <button className='button-landing button is-danger is-rounded is-6' onClick={() => onLogin()}>{login}</button>
        </section>


    </main>

}
export default Landing