// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Import my components
import Cat from './components/Cat';
import Hello from './components/Hello';
import BasicForm from './components/BasicForm';
import Counter from './components/Counter';
import Converter from './components/Converter';
import React from 'react';

// Component - function that must start with a Captial letter. 
// Although doesn't have to use strict PascalCase.
const App = () => {
  return (
    // Can wrap all HTML in empty tags (React fragment) <>, 
    // <div>, <main> or another parent 
    // element but there must only be ONE parent
    <div className='flex-container'>
      {/* <div className="flex-item"> 
        <br />
          <BasicForm />
        </div> */}
        {/* <div className="flex-item">  */}
          <Counter />
        {/* </div> */}
        {/* <div className="row"> 
          <Converter />
        </div> */}
        {/* <div className="row">  
          <Hello name="Peta" />
        </div>
        <div className="row"> 
          <Cat name="Cindy Clawford" colour="Grey" age="12" />
          <br />
        </div> */}
    </div>
  );
}

export default App;
