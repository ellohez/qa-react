import { useState } from "react";
// Add this import to all components
//  to get around the React / JSX scope issues
import React from 'react';

const Counter = () => {

    
    // Destructure getter and setter
    // Square brackets because it's an array
    // UseState is a hook
    const [count, setCount] = useState(0); 
    
    return (
        <div>
            <input value={count} />
            <br />
            <div className="row"> 
                <button onClick={() => setCount(count - 5)}>-5</button>
                <button onClick={() => setCount(count - 1)}>-1</button>
                <button onClick={() => setCount(0)}>R</button>
                {/* pass a function - don't call the function
                otherwise the page will constantly call it, change state 
                and reload...call it, change state and reload...*/}
                <button onClick={() => setCount(count + 1)}>+1</button>
                <button onClick={() => setCount(count + 5)}>+5</button>
                <textarea name="postContent"
                            defaultValue="History goes here"
                            rows={4}
                            cols={40}>

                </textarea>
            </div>
        </div>
    )
}

export default Counter;