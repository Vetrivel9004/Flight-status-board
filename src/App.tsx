import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FlightBoard from './components/FlightBoard.tsx';
import FlightDetails from './components/FlightDetails.tsx';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <h1>Flight Status Board</h1>
        <Routes>
          <Route path="/" element={<FlightBoard />} />
          <Route path="/flight/:id" element={<FlightDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
