// Add this import to all components
//  to get around the React / JSX scope issues
import React from 'react';

// Arrow function to return Cat as a representation
// of single native DOM component <div>
//  Props are passed in parameters can be used as props.<keyName>
//  see Hello.jsx or destructe as below
const Cat = ({name, colour, age}) => (
    <div>
        <p>Name: {name}</p>
        <p>Colour: {colour}</p>
        <p>Age: {age}</p>
    </div>
);

export default Cat;