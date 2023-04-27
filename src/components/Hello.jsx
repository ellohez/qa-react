// Add this import to all components
//  to get around the React / JSX scope issues
import React from 'react';

const Hello = props => (
    <div>
        <p>Hello, {props.name}</p>
    </div>
);

export default Hello;