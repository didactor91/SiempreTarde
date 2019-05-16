import React from 'react'
import literals from './literals'
import './index.sass'
import emoji from 'react-easy-emoji'

function Home({ lang, onStopCode, onLineCode, onFavorites, onLogout }) {
    const { title, stopByCode, stopByLine, favoriteStops, logout } = literals[lang]

    return <section className="main-home">

        <h1 className="home-title">
            <p>
                {emoji(' 📍 ... 🚍')}
                <span>{title}</span>
            </p>

        </h1>
        <section className="home-container">
            <div className='columns is-desktop is-8 is-offset-2'>
                <div className='column is-2 is-desktop'>
                    <button className='button-home button is-danger is-large is-rounded' onClick={() => onStopCode()}>{stopByCode}</button>
                </div>
                <div className='column is-2 is-desktop'>
                    <button className='button-home button is-danger is-large is-rounded' onClick={() => onLineCode()}>{stopByLine}</button>
                </div>
                <div className='column is-2 is-desktop'>
                    <button className='button-home button is-danger is-large is-rounded' onClick={() => onFavorites()}>{favoriteStops}</button>
                </div>
                <div className='column is-2 is-desktop'>
                    <button className='button-home button is-danger is-large is-rounded is-outlined' onClick={() => onLogout()}>{logout}</button>
                </div>
            </div>

        </section>

    </section>

}
export default Home