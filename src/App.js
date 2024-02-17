import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Report from './page/report';
import CreateStore from './page/CreateStore';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/report' element={<Report />} />
        <Route path='/CreateStore' element={<CreateStore />} />
      </Routes>
    </Router>
  );
}

export default App;
