import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <Message name="Vishwa"></Message> */}
      {/* <Greet name = "Vishwa" sirName = "Tontanal"/> */}
      {/* <Greet name = "Ravi" sirName="Tontanal"/> */}
      {/* <Greet name = "Vinayaka" sirName = "soratoor"/> */}
      {/* <Welcome /> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
