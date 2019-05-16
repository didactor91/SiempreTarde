import React from 'react'
import literals from './literals'
import { Link } from "react-router-dom"
import logic from '../../logic'
import './index.sass'

function StopCode({lang, onSearch, error}) {
    const {title, stop, submit, reset,back} = literals[lang]

    function handleSubmit(e) {
        e.preventDefault()

        const {
            stop_id : {value: stop_id},
        } = e.target
        let number = parseInt(stop_id,10);

        onSearch(number)


    }


    return <section className="main-stopcode">
    <Link to={`/`}><button className="button-back button is-rounded is-danger is-outlined">{back}</button></Link>
     <div className="container">
        <h2 className="title">{title}</h2>
        <form className="container has-text-centered" onSubmit= {handleSubmit}>
                <input className="input-stopcode input field is-rounded is-danger" type="number" min="1" max="999999" name="stop_id" placeholder={stop} autoFocus/>
                <div>
                <input className="button is-rounded is-danger" type="submit" value={submit}/>
                <input className="button is-rounded is-danger" type="reset" value={reset}/>
                </div>
        </form>
        <span className="help is-danger">{error}</span>
    </div>
    </section>

}
export default StopCode