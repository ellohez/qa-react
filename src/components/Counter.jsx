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
    let lastValue = 0;

    const storeAndCalc = (btnValue) => {
        lastValue = count;
        const newValue = count + btnValue;
        setCount(newValue);
        let historyText = `${postContent}
                    ${lastValue} ${(btnValue > 0 ? "+" : "")} ${btnValue} = ${newValue}`;
        setPostContent(historyText);    
    }   
    
    return (
        <div className="row">
            <input value={count} />
            <div className=""> 
                <button onClick={() => storeAndCalc(-5)}>-5</button>
                <button onClick={() => storeAndCalc(-1)}>-1</button>
                <button onClick={() => {setCount(0); setPostContent('')}}>R</button>
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