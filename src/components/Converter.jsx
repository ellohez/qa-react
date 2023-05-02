import { useState } from "react";
// Add this import to all components
//  to get around the React / JSX scope issues
import React from 'react';

const Converter = () => {
    const [miles, setMiles] = useState(0);
    const [kms, setKms] = useState(0);

    const changeMiles=(e) => {
        // Get the input's value (miles)
        const newMiles = e.target.value; 
        setMiles(newMiles);
        setKms(newMiles * 1.6);
    }

    const changeKms=(e) => {
        // Get the input's value (KMs)
        const newKms = e.target.value; 
        setKms(newKms);
        setMiles(newKms / 1.6);
    }

    return (
        <>
            <label>Miles: </label>
            <input value={miles} onChange={changeMiles} />
            <label>KMs: </label> 
            <input value={kms} onChange={changeKms} />
        </>
    );
};

export default Converter;