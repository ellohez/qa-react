// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Import my components
import React from 'react';
// import Cat from './components/Cat';
// import Hello from './components/Hello';
// import BasicForm from './components/BasicForm';
// import Counter from './components/Counter';
// import Converter from './components/Converter';
// import Trainers from './components/Trainers';
// import ProductTable from './components/ProductTable';
import Header from './components/Header';
import Footer from './components/Footer';
import MyComponent from './components/MyComponent';

// Component - function that must start with a Captial letter. 
// Although doesn't have to use strict PascalCase.
const App = () => {
  return (
    // Can wrap all HTML in empty tags (React fragment) <>, 
    // <div>, <main> or another parent 
    // element but there must only be ONE parent
    <div>
      <div className='app-header'>
        <p></p>
      </div>
      <div className='flex-container'>
        <Header />
      </div>
      <div>
        <MyComponent />
      </div>   
      {/* <div className="flex-container">
        <ProductTable />
      </div>
      <div className="flex-container">
        <Counter />
      </div>
      <div className='flex-row'>
        <div className='flex-item'>
            <Trainers />
        </div>
      </div>
      <div className='flex-container'>
        <div className="flex-item"> 
        <br />
          <BasicForm />
        </div>
      </div>
        <div className="row"> 
          <Converter />
        </div>
        <div className="row">  
          <Hello name="Peta" />
        </div>
        <div className="row"> 
          <Cat name="Cindy Clawford" colour="Grey" age="12" />
          <br />
        </div> */}
        <div className='flex-container'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
