import { useState } from "react";
// Add this import to all components
//  to get around the React / JSX scope issues
import React from 'react';

const Counter = () => {
    // Destructure getter and setter
    // Square brackets because it's an array
    // UseState is a hook
    const [count, setCount] = useState(0); 
    const [postContent, setPostContent] = useState('');
    let historyText = '';
    let lastValue = 0;

    const storeAndCalc = (btnValue) => {
        const newValue = count + btnValue;
        historyText = `${postContent}
                    \n ${count} ${(btnValue > 0 ? "+" : "")} ${btnValue} = ${lastValue}`;
        setPostContent(historyText);    
        setCount(newValue);
        lastValue = btnValue;
    }   
    
    return (
        <div>
            <input value={count} />
            <br />
            <div className="row"> 
                <button onClick={() => storeAndCalc(-5)}>-5</button>
                <button onClick={() => storeAndCalc(-1)}>-1</button>
                <button onClick={() => setCount(0)}>R</button>
                {/* pass a function - don't call the function
                otherwise the page will constantly call it, change state 
                and reload...call it, change state and reload...*/}
                <button onClick={() => storeAndCalc(+1)}>+1</button>
                <button onClick={() => storeAndCalc(+5)}>+5</button>
                <textarea 
                        name="postContent" 
                        value={postContent}
                        // defaultValue="History goes here"
                        rows={4}
                        cols={40}
                        />
            </div>
        </div>
    )
}

export default Counter;