import { Component, useState } from 'react';
import './App.css';
import Home from './components/Home';
import SelectStall from './components/SelectStall';

function App() {
  return (
    <div className="content">
      <SelectStall />
    </div>
  );
}

export default App;
