import React from 'react'
import '../utils/global/css/global.css'

export default function ParagraphSection() {
    return (
        <section className='main__grid__container'>
            <p className='paragraph__section'>
                Denna miniräknare kan uppskatta resekostnaden med bil enligt resans avstånd, 
                bilens bränsleförbrukning och priset på bensin med olika enheter.
            </p>
            <p className='paragraph__section'>
                Priset på bensin kan gå upp eller ner, men det är alltid en stor kostnad för de flesta förare. 
                Den genomsnittliga amerikanska föraren spenderar cirka 3000 dollar per år för bensin, enligt 
                Amerikan Automobil Association.
            </p>
            <br/>
        </section>  
    )
}