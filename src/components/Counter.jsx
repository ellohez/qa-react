import { useState } from "react";
// Add this import to all components
//  to get around the React / JSX scope issues
import React from 'react';

const Counter = () => {
    // Destructure getter and setter
    // Square brackets because it's an array
    const [count, setCount] = useState(0); 
    return (
        <>
            <input value={count} />
            {/* pass a function - don't call the function
            otherwise the page will constantly call it, change state 
            and reload...call it, change state and reload...*/}
            <button onClick={() => setCount(count+1)}>+1</button>
        </>
    )
}

export default Counter;