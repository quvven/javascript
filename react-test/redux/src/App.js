import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Increase from './components/Increase';
import Decrease from './components/Decrease';
import IncreaseByTwo from './components/IncreaseByTwo';

function App() {
  return (
    <div className="App">
      <Counter/>
      <Increase/>
      <Decrease/>
      <IncreaseByTwo/>
    </div>
  );
}

export default App;
