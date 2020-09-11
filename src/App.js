import React from 'react';

import './App.css';

import Board from './components/Board';
import Command from './components/Command';

function App() {
  return (
    <div className="app">
      <Board />
      <Command />
    </div>
  );
}

export default App;
