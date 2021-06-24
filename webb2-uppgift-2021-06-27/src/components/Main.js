import React from 'react';
import { FuelCostCalculator } from './FuelCostCalculator';
import ParagraphSection from './ParagraphSection';
import Links from './Links';
import '../utils/global/css/global.css'

export const Main = () => {
    return (
        <main>
            <FuelCostCalculator/>
            <ParagraphSection/>
            <Links/>
        </main>
    )
}