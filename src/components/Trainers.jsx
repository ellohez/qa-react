import trainers from "../trainers.json";
import Trainer from "./Trainer";
// Add this import to all components
//  to get around the React / JSX scope issues
import React from 'react';

const Trainers = () => {
    // Convert a JSON (array of objects) from the .json file 
    // into an array of Trainer components
    return (
        <>
            {
                trainers.map(({name, age, id}) => 
                    <Trainer key={id} name={name} age={age} />) 
            }
        </>
    );
}

export default Trainers;