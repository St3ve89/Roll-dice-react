import React from 'react';
import Die from './Die';
import './App.css';

function App() {
  return (
    <div className="App">
      <Die face="five"/>
      <Die face="six"/>
      <Die face="three"/>
      <Die face="two"/>
    </div>
  );
}

export default App;
