// Add this import to all components
//  to get around the React / JSX scope issues
import React from 'react';

const Footer = () => (
    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright: 
        <a className='class fw-bold text-muted' href='https://github.com/ellohez'
            target="_blank" rel="noopener noreferrer">&nbsp;Helen Pickavance
        </a>
    </div>
);

export default Footer;
