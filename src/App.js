// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/min/bootstrap.min.css'
// Import my components
import Cat from './components/Cat';
import Hello from './components/Hello';

// Component - function that must start with a Captial letter. 
// Although doesn't have to use strict PascalCase.
const App = () => {
  return (
    // Can wrap all HTML in empty tags (React fragment) <>, 
    // <div>, <main> or another parent 
    // element but there must only be ONE parent
    <>
      <Hello name="Peta" />
      <Cat name="Cindy Clawford" colour="Grey" age="12"/>
    </>
  );
}

export default App;
