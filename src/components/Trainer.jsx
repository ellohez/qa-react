// Add this import to all components
//  to get around the React / JSX scope issues
import React from 'react';

// Arrow function to return Trainer as a representation
// of single native DOM component <div>
//  Props are passed in parameters can be used as props.<keyName>
//  see Hello.jsx or destruct as below
const Trainer = ({name, age}) => (
    <div className="row">
        <p>Name: {name}</p>
        <p>Age: {age}</p>
    </div>
);

export default Trainer;