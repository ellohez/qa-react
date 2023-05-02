// Add this import to all components
//  to get around the React / JSX scope issues
import React from 'react';

const Header = () => (
    <header>
        <nav class="navbar navbar-expand-sm">
            <a class="navbar-brand" href="https://www.qa.com" 
            target="_blank" rel="noopener noreferrer">
                <img alt="Hummingbird logo for Digital Tech" 
                src='/assets/Tech-Digital-Bird-logo.jpg' 
                
                    width="100"  height="100" />
            </a>
            <a class="navbar-brand" href="/">ToDo App</a>
        </nav>
    </header>
);


export default Header;