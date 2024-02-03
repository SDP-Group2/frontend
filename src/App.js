import { Component, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import MarketMap from './components/MarketMap';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="content">
      <Navbar />
      <div className="veiwMobile">
        <div>
          <Profile />
          <MarketMap />
        </div>
        <Reservation />
      </div>
      <Footer />
    </div>
  );
}

export default App;
