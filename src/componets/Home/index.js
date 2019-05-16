import React from 'react'
import literals from './literals'
import './index.sass'
import emoji from 'react-easy-emoji'

function Home({ lang, onStopCode, onLineCode, onFavorites, onLogout }) {
    const { title, stopByCode, stopByLine, favoriteStops, logout } = literals[lang]

    return <section className="main-home">
        <section className='buttons-home buttons'>

            <h1 className="home-title">
                <p>
                    {emoji(' 📍 ... 🚍')}
                    <span>{title}</span>
                </p>

            </h1>
            <section className="button-section">
            <div className='columns is-8 is-2-offset is-desktop'>
            <div className='column is-half is-desktop'>
                <button className='button-landing button is-danger is-large is-rounded' onClick={() => onStopCode()}>{stopByCode}</button>
                <hr></hr>
                <button className='button-landing button is-danger is-large is-rounded' onClick={() => onLineCode()}>{stopByLine}</button>
                <hr></hr>
                </div>
                <div className='column is-half is-desktop'>
                <button className='button-landing button is-danger is-large is-rounded' onClick={() => onFavorites()}>{favoriteStops}</button>
                <hr></hr>
                <button className='button-landing button is-danger is-large is-rounded' onClick={() => onLogout()}>{logout}</button>
                <hr></hr>
                </div>
                </div>
                </section>
        </section>
    </section>

}
export default Home