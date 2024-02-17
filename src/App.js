import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Report from './page/report';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/report' element={<Report />} />
      </Routes>
    </Router>
  );
}

export default App;
