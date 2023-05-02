// Add this import to all components
//  to get around the React / JSX scope issues
import React from 'react';

const MyComponent = () => {
    return (
        <h1 className='text-center p-4' style={{ color: 'rgba(0, 0, 0, 1)' }}>Hello, World!</h1>
    )
};

export default MyComponent;