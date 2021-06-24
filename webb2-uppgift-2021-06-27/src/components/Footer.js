import React from 'react';
import SocialMediaFollows from './SocialMediaFollows';
import '../utils/global/css/global.css'

export default function Footer() {
    return (
        <footer>
            <div>
                <h6 className='footer__text'>
                    Denna webbplats är designad av 
                    <span className='name'> Girlie Quindao Razon</span>
                <SocialMediaFollows/>
                </h6>
            </div> 
        </footer>
    )
}