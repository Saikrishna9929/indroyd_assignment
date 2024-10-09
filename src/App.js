import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ComputerMainScreen from './components/ComputerMainScreen';
import MobilePlayerScreen from './components/MobilePlayerScreen';
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ComputerMainScreen />} />
          <Route path="/player" element={<MobilePlayerScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
