import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, 
         faFacebook, 
         faInstagram, 
         faTwitter, 
         faSnapchat, 
         faLinkedin, 
         faTiktok } from '@fortawesome/free-brands-svg-icons';
import '../utils/global/css/global.css'

export default function SocialMediaFollows() {
    return (
        <div className='social__media__container'>
            <h3 className='social__media'>Social Media</h3>

            <a href='#' className='youtube'>
                <FontAwesomeIcon icon={ faYoutube } />
            </a>

            <a href='#' className='facebook'>
                <FontAwesomeIcon icon={ faFacebook } />
            </a>

            <a href='#' className='instagram'>
                <FontAwesomeIcon icon={ faInstagram } />
            </a>

            <a href='#' className='twitter'>
                <FontAwesomeIcon icon={ faTwitter } />
            </a>

            <a href='#' className='snapchat'>
                <FontAwesomeIcon icon={ faSnapchat } />
            </a>

            <a href='#' className='linkedin'>
                <FontAwesomeIcon icon={ faLinkedin } />
            </a>

            <a href='#' className='tiktok'>
                <FontAwesomeIcon icon={ faTiktok } />
            </a>
        </div>
    )
}