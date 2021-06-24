import React, { useState } from 'react';
import '../utils/global/css/global.css'


export const FuelCostCalculator = () => {
    const [distance, setDistance] = useState('');
    const [fuelConsumption, setFuelConsumption] = useState('');
    const [fuelPrice, setFuelPrice] = useState('');
    const [resetInput, setResetInput] = useState(0);

    const handleDistanceChange = (event) => {
        setDistance(event.target.value);
    };

    const handleFuelConsumptionChange = (event) => {
        setFuelConsumption(event.target.value);
    };

    const handleFuelPriceChange = (event) => {
        setFuelPrice(event.target.value);
    };

    const handleResetInput = (event) => {
        setDistance(0);
        setFuelConsumption(0);
        setFuelPrice(0);
        
        Array.from(document.querySelectorAll('input')).forEach(input => (input.value ='')
        );
        setResetInput({
            itemvalues: [{}]
        });
    }

    let FuelCost = (distance / 100 * fuelConsumption * fuelPrice).toFixed(2);

    function DisplayMessage() {
        if  (FuelCost >= 1001) {
            return 'Har du funderat på flyg?'
        } else if (FuelCost >= 400) {
            return 'Har du funderat på att åka tåg?'
        } else if (FuelCost >= 1) {
            return 'Resonabel resa'
        } else {
            return ''
        }
    };

    return (
        <div className='main__heading main__grid__container'>
            <h3 className='destination'>
                DESTINATION   
            </h3>
            <input
                className='destination__option__dropdown destination__option'
                placeholder='Från'
                type='text'
            />
            <br/>
            <br/>
            <input 
                className='destination__option__dropdown destination__option'
                placeholder='Till'
                type='text'
            />

            <br/>
            <br/>

            <h3 className='distance'>RESESTRÄCKAN</h3>
            <input 
                className='input__item__one'
                placeholder='Körsträcka (KM)'
                type='number'
                onChange={ handleDistanceChange }
            /> 

            <br/>
            <br/>

            <h3 className='gas__consumption'>BENSINFÖRBRUKNINGEN</h3>
            <input 
                className='input__item__two'
                placeholder='L / 100 KM' 
                type='number'
                onChange={ handleFuelConsumptionChange }
            />

            <br/>
            <br/>

            <h3 className='gas__price'>BENSINPRISET</h3>
            <input 
                className='input__item__three' 
                placeholder='KR / L'
                type='number'
                onChange={ handleFuelPriceChange }
            /> 

            <br/>
            <br/>
            <br/>

            <div className='btn__container'>
                <button onClick={ handleResetInput } 
                className='btn__clear'>rensa</button>
            </div>

            <br/>
            
            <h3 className='total__cost__label'>
                    Total Kostnad:  <span className='calculation__result'><u>{ FuelCost }</u></span>
            </h3>
            <span className='result__suggestion'>{ DisplayMessage() }</span>
            <br/>
        </div>
    )
}