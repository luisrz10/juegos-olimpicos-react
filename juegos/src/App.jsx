import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Countries from './pages/Countries';
import Athletes from './pages/Athletes';
import AthleteDetail from './pages/AthleteDetail';
import EventDetail from './pages/EventDetail';
import Sports from './pages/Sports';
import Header from './components/Header';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Router>
        <Header />
        <main style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/athletes" element={<Athletes />} />
            <Route path="/athlete/:athleteId" element={<AthleteDetail />} />
            <Route path="/event/:eventId" element={<EventDetail />} />
            <Route path="/sports" element={<Sports />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
