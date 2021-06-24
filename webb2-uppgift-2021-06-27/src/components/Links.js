import React from 'react';
import '../utils/global/css/global.css'

export default function Links() {
    return (
        <div className='factor__list__container'>
            <h2 className='factor__list__heading'>
                Faktorer som bestämmer bränslepriset
            </h2>
            <ul className='factor__list__links'>
                <li className='factor__list__links__item'>
                    <a className='links__item__a' href='#'>Regeringens ingripande</a>
                </li>
                <li className='factor__list__link__item'>
                    <a className='links__item__a' href='#'>Finansmarknader</a>
                </li>
                <li className='factor__list__link__item'>
                    <a className='links__item__a' href='#'>Politik</a>
                </li>
                <li className='factor__list__link__item'>
                    <a className='links__item__a' href='#'>Geografiskt område</a>
                </li>
                <li className='factor__list__link__item'>
                    <a className='links__item__a' href='#'>Naturkatastrof eller väder</a>
                </li>
            </ul> 
            <br/>
            <br/>
        </div>
    )
}